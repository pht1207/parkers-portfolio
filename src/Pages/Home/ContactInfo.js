import './ContactInfo.css'

function HiMyNameIs(props) {

    function GitHubIconClicked(){
        window.open("https://github.com/pht1207/")
    }
    function LinkedInIconClicked(){
        window.open("https://www.linkedin.com/in/pht1207/")
    }
    function ResumeIconClicked(){
        const link = document.createElement('a');
        link.href = "ParkerThroneberry_Resume.pdf";
        link.download = 'ParkerThroneberry_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="ContactDiv">
            <img src="/images/Me.jpg" className='ProfilePic'/>
            <div className='IconFlexbox'>
                <img className="GitHubIcon"src="/images/github-mark-white.png" onClick={GitHubIconClicked}></img>
                <img className="LinkedInIcon"src="/images/LinkedIn.png" onClick={LinkedInIconClicked}></img>
                <img className="ResumeIcon"src="/images/ResumeIcon.png" onClick={ResumeIconClicked}></img>
            </div>
        </div>
    );
    }
    
    export default HiMyNameIs;