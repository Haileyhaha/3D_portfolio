import React from 'react'
import { skills, experiences } from '../constans'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        안녕하세요,
        <br/>
        저는 <span className='blue-gradient_text font-semibold drop-shadow'>서혜인</span>입니다
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>한국의 웹 개발자입니다. 저는 이런 기술들을 가지고 있습니다. </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3> 
      
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-xl'/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img src= {skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        ))}
          </div>
      </div>
      
      <div className='py-16'>
        <h3 className='subhead-text'>입사 후 포부</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>입사 후, 저는 회사의 비전과 목표에 부합하는 지속적인 기술 혁신에 기여하고자 합니다. 특히, 최신 기술 트렌드를 꾸준히 학습하고 이를 실무에 적용하여 효율적이고 창의적인 솔루션을 제시할 것입니다. 제가 이전 직장에서 쌓은 협업과 문제 해결 능력을 바탕으로, 팀 내에서 원활한 커뮤니케이션을 통해 프로젝트를 성공적으로 이끌어 나가겠습니다. 자기계발을 즐기며, 새로운 지식을 습득하고 기술적 역량을 확장하는 것을 중요시합니다. 이러한 태도를 바탕으로, 새로운 도전 과제와 기술적 발전을 통해 개인적인 성장을 이룰 뿐만 아니라, 회사의 발전에도 기여할 것입니다. 매일매일 진화하는 개발자로서의 성과를 통해 회사와 함께 성장하며, 실질적인 가치를 창출하는 데 최선을 다하겠습니다.</p>
        </div>
        
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experiences)=>(
              <VerticalTimelineElement
                key={experiences.company_name}
                date={experiences.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experiences.icon}
                    alt={experiences.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{background:experiences.iconBg}}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experiences.iconBg,
                  borderShadow :'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experiences.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' sytle={{margin:0}}>
                    {experiences.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experiences.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-noraml pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA/>
    </section>
    
  )
}
export default About