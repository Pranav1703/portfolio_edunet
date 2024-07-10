import React from 'react'
import "../styles/skills.css"

const SkillBox =({imgSrc,name})=>{
    return (
        <div className="skill-box">
            <img src={imgSrc} alt={name} width={75}/>
        </div>
    )
}

const Skills = () => {
  return (
    <div className="skills">
        <h2>Skills</h2>

        <div className="skill-list">
            <SkillBox
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png"}
                name={"C"}
            />
            <SkillBox
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"}
                name={"C++"}
            />
            <SkillBox
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"}
                name={"python"}
            />
            <SkillBox 
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"}
                name={"HTML"}
            />
            <SkillBox
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"}
                name={"css"}
            />
            <SkillBox
                imgSrc={"data:image/png;base64,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"}
                name={"javascript"}
            />
            <SkillBox
                imgSrc={"data:image/png;base64,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"}
                name={"typescript"}
            />
            <SkillBox
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"}
                name={"react"}
            />
            <SkillBox
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"}
                name={"nodeJS"}
            />
            <SkillBox
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png"}
                name={"Go"}
            />
            <SkillBox
                imgSrc={"data:image/png;base64,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"}
                name={"PostgreSQL"}
            />
            <SkillBox
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"}
                name={"MongoDB"}
            />
        </div>

    </div>
  )
}

export default Skills