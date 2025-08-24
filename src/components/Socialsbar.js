import { TbMailFilled } from 'react-icons/tb';
import { IoLogoLinkedin } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';
import './Socialsbar.css';

const Socialsbar = () => {
    return (
        <div className="my-10 shrink flex justify-center items-start gap-20 z-50 invert">
            <div className="">
                <a href="mailto:samuelngiam@yahoo.com"><TbMailFilled className="w-10 h-9 hover:scale-150 duration-500"/></a>
            </div>
            <div className="">
                <a href="https://www.linkedin.com/in/samuel-ngiam-79427b22a/"><IoLogoLinkedin className="w-10 h-9 hover:scale-150 duration-500"/></a>
            </div>
            <div className="">
                <a href="https://github.com/Chaoster3"><BsGithub className="w-10 h-9 hover:scale-150 duration-500"/></a>
            </div>
        </div>
    )
}

export default Socialsbar