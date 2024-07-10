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
                imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"}
                name={"MongoDB"}
            />
        </div>

    </div>
  )
}

export default Skills