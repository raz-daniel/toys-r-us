import './Add.css'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Audience from "../../../models/audience/Audience"
import audiencesServices from '../../../services/audiences'
import Draft from '../../../models/game/Draft'
import gamesServices from '../../../services/games'

export default function Add(): JSX.Element {
    const [audiences, setAudiences] = useState<Audience[]>([])

    useEffect(() => {
        (async () => {
            try {
                const audiences = await audiencesServices.getAudiences()
                setAudiences(audiences)
            } catch (error) {
                alert(error)
            }

        })()
    }, [])

    const { register, handleSubmit, formState } = useForm<Draft>()

    const navigate = useNavigate()

    async function submit(draft: Draft) {
        try {
            const { audienceId } = draft
            const newGame = await gamesServices.add(draft)
            alert(`Added ${newGame.name}`)
            navigate('/games/list', { state: { selectedAudienceId: audienceId} })
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='game name' {...register('name', {
                    required: {
                        value: true,
                        message: 'must enter name'
                    },
                    max: {
                        value: 40,
                        message: 'maximum 40 letters'
                    }
                })}/>
                <span className='error'>{formState.errors.name?.message}</span>
                

                <input placeholder='description' {...register('description', {
                    required: {
                        value: true,
                        message: 'must enter description'
                    },
                    minLength: {
                        value: 10,
                        message: 'must enter at least 10 letters'
                    }
                })}/>
                <span className='error'>{formState.errors.description?.message}</span>

                <select defaultValue={''}{...register('audienceId', {
                    required: {
                        value: true,
                        message: 'must choose audience'
                    }
                })}>
                    <option value="" disabled>Please select audience...</option>
                    {audiences.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                </select>
                <span className='error'>{formState.errors.audienceId?.message}</span>

                <input type="number" placeholder='price' {...register('price', {
                    required: {
                        value: true,
                        message: 'must enter price'
                    },
                    min: {
                        value: 0,
                        message: 'price must be positive'
                    }
                })}/>
                <span className='error'>{formState.errors.price?.message}</span>

                <button>Add Game</button>

            </form>
        </div>
    )
}