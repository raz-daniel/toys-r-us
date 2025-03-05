import './Footer.css'

export default function Footer(): JSX.Element {

    return (
        <div className='Footer'>
            <p> Copyright Toys-R-Us &copy; {new Date().getFullYear()}  </p>
        </div>
    )
}