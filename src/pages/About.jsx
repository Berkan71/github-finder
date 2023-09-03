import { FaGithub } from 'react-icons/fa'

function About() {
    return (
        <div>
            <h1 className="text-6xl">Github Finder</h1>
            <div className='flex'>
                <span className='flex my-6 font-medium items-center justify-center'>
                    Would you like to browse my Github?
                </span>
                <a href="https://github.com/Berkan71" className='flex ml-5 font-medium items-center justify-center'>
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default About