import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            안녕하세요, 저는 <span className='font-semibold mx-2 text-white'>서혜인</span> 입니다 !  
            <br />
            저는 한국의 웹 개발자 입니다 👩‍💻
        </h1>
    ),
    2: (
        <InfoBox
            text="저는 이런 사람입니다 🤗 저에 대해 궁금하시다면 눌러보세요! "
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
          <InfoBox
            text="제가 열심히 만든 프로젝트 입니다 ✌️ 들어와서 구경하세요 !"
            link="/projects"
            btnText="Visit My Portfolio"
        />
    ),
    4: (
          <InfoBox
            text="저에게 연락하고 싶으시다면 여기를 눌러주세요! 💌 "
            link="/contact"
            btnText="Contact Me"
        />
    ),
    
}

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo