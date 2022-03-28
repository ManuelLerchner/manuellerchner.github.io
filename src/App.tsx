import { render } from "react-dom";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { GlHero } from "gitlanding/GlHero";
import { GlArticle } from "gitlanding/GlArticle";
import { GlIllustration } from "gitlanding/GlIllustration";
import { GlFooter } from "gitlanding/GlFooter";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { GlProjectCard } from "gitlanding/GlCards/GlProjectCard";
import { GlCheckList } from "gitlanding/GlCheckList";
import { GlSlider } from "gitlanding/GlSlider";
import { GlReviewSlide } from "gitlanding/GlReviewSlide";

export default function App() {
    return (
        <GlTemplate
            header={
                <GlHeader
                    title="Manuel Lerchner"
                    links={[
                        {
                            label: "Portfolio-Website",
                            href: "https://manuellerchner.de",
                        },
                        {
                            label: "Monopoly-Smart-Bank",
                            href: "https://monopoly.manuellerchner.de/",
                        },
                        {
                            label: "Path-Finder",
                            href: "https://pathfinder.manuellerchner.de/",
                        },
                        {
                            label: "Task-Planner",
                            href: "https://taskplanner.manuellerchner.de/",
                        },
                        {
                            label: "Mock-Trading",
                            href: "https://mocktrading.manuellerchner.de/",
                        },
                    ]}
                    enableDarkModeSwitch={true}
                    githubRepoUrl="https://github.com/ManuelLerchner"
                    githubButtonSize="large"
                />
            }
            headerOptions={{
                position: "fixed",
                isRetracted: "smart",
            }}
            footer={
                <GlFooter
                    bottomDivContent="This website is built with React and TypeScript using https://www.gitlanding.dev/"
                    email="manuel.lerchner1111@gmail.com"
                    phoneNumber="+393886276090"
                    links={[
                        {
                            href: "https://www.youtube.com/channel/UCvIGqQ5pelOqwaKOFaqiP4w",
                            label: "Youtube",
                        },
                        {
                            href: "https://twitter.com/ManuelLerchner",
                            label: "Twitter",
                        },
                        {
                            href: "https://github.com/ManuelLerchner",
                            label: "Github",
                        },
                    ]}
                />
            }
        >
            <GlHero
                title="Manuel Lerchner"
                subTitle={"Computer Science Student and Developer."}
                imageSrc="https://user-images.githubusercontent.com/39378411/135731749-4a723d4e-52ea-49b7-83c1-7da4db8f3f59.png"
                hasLinkToSectionBellow={true}
            />

            <GlArticle
                id="firstSection"
                title="About Me"
                body={`Hi! My name is Manuel Lerchner and I am passionate about informatics, programming, and science.
                I love learning, solving problems, and building things. I am currently studying Computer Science at the Technical University of Munich.
                Feel free to contact me if you have any questions or want to work together. And checkout my Website below!`}
                buttonLink={{
                    href: "https://manuellerchner.de",
                }}
                illustration={
                    <GlIllustration
                        type="image"
                        url="https://user-images.githubusercontent.com/39378411/135731808-6cf3e4dd-1047-4a0a-95be-65fdd6947315.png"
                    />
                }
                hasAnimation={true}
                illustrationPosition="left"
            />

            <GlCards>
                {
                    <>
                        <a
                            className="wrapperLink"
                            href="https://github.com/ManuelLerchner/"
                            title="monopoly"
                        >
                            <GlLogoCard
                                title="GitHub"
                                paragraph={`Check out my Github profile and see what I've been up to.`}
                                buttonLabel="Github"
                                iconUrls={[
                                    "https://user-images.githubusercontent.com/39378411/135731995-136d4baf-58a6-4cb3-a72c-b8ddce835b3c.png",
                                ]}
                            />
                        </a>
                        <a
                            className="wrapperLink"
                            href="https://manuellerchner.de/"
                            title="portfolio"
                        >
                            <GlLogoCard
                                title="Portfolio-Website"
                                paragraph={`Check out my Portfolio-Website. Where I share some of my projects.`}
                                buttonLabel="Portfolio"
                                iconUrls={[
                                    "https://manuellerchner.de/images/logo2.png",
                                ]}
                            />
                        </a>
                    </>
                }
            </GlCards>

            <GlSectionDivider />

            <GlCards>
                <>
                    <a
                        className="wrapperLink"
                        href="https://mocktrading.manuellerchner.de"
                        title="mocktrading"
                    >
                        <GlProjectCard
                            title="Mock Trading"
                            subtitle="A mock trading application to simulate the stock market."
                            projectImageUrl="https://user-images.githubusercontent.com/54124311/160500708-56b11129-57f6-41bf-9a04-0719b76beac2.png"
                        />
                    </a>
                    <a
                        className="wrapperLink"
                        href="https://pathfinder.manuellerchner.de"
                        title="pathfinder"
                    >
                        <GlProjectCard
                            title="Path Finder"
                            subtitle="A path finding visualisation tool, to help explain some path-finding algorithms."
                            projectImageUrl="https://user-images.githubusercontent.com/54124311/160503115-c4dbde19-4e5b-4017-8188-4da1dff1da70.png"
                        />
                    </a>
                    <a
                        className="wrapperLink"
                        href="https://monopoly.manuellerchner.de"
                        title="monopoly"
                    >
                        <GlProjectCard
                            title="Monopoly Bank"
                            subtitle="A smart bank application to simulate a Monopoly game."
                            projectImageUrl="https://user-images.githubusercontent.com/54124311/134827394-fe2e4230-c9e2-481a-94b7-96430477ad07.png"
                        />
                    </a>
                    <a
                        className="wrapperLink"
                        href="https://taskplanner.manuellerchner.de"
                        title="monopoly"
                    >
                        <GlProjectCard
                            title="Task-Planner"
                            subtitle="A task planner application to help you organize your tasks."
                            projectImageUrl="https://user-images.githubusercontent.com/54124311/160501868-3fe3ac86-0c4c-4d6c-a16a-cf2833a388e5.png"
                        />
                    </a>
                </>
            </GlCards>
        </GlTemplate>
    );
}

render(<App />, document.getElementById("root"));
