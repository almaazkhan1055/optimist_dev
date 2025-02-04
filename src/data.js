export const data = {
  signUpData: {
    heading: "Sign up",
    inputs: [
      { title: "Full name", placeholder: "your name", name: "fullname" },
      { title: "Email", placeholder: "you@email.com", name: "email" },
    ],
    terms:
      "I agree to receive promotional and instructional emails from Academind",
    disclaimer:
      "By signing up, I agree to Academind's Privacy & Terms, and Teachable's Privacy & Terms.",
    buttonText: "Send code",
    userExists: "Already have an account?",
  },
  loginData: {
    heading: "Log in",
    inputs: [{ title: "Email", placeholder: "you@email.com", name: "email" }],
    terms: "Remember me",
    buttonText: "Login",
    userExists: "Don't have an account?",
  },
  headerData: {
    logo: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://cdn.filestackcontent.com/QaXgiMolT9eAmFXmB8VY",
    links: [
      { name: "All Courses", href: "/courses" },
      { name: "Enrolled Courses", href: "purchased" },
      { name: "Community & Support", href: "/support" },
    ],
  },
  heroData: {
    title: "The Academind Pro Membership",
    subtitle:
      "Unlock unlimited learning with instant access to 50 courses and continuous updates.",
    btnText: "Get Full Access Now",
    image: "https://www.filepicker.io/api/file/Je6LIIefSQyqJ2UiQ9YJ",
  },
  videoData: {
    title: "LEARN TO CODE & BOOST YOUR CAREER",
    subtitle:
      "Master coding from fundamentals to advanced topics in real-world projects! Earn certificates to showcase your progress and achievements!",
    trailer:
      "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4",
  },
  testimonialData: {
    title: "YOUR LEARNING EXPERIENCE",
    subtitle: "You got the goal, we got the tools",
    testimonialCardData: [
      {
        image:
          "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/courses-icon_u9emvz",
        title: "50 Courses Included",
      },
      {
        image:
          "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/hours-content-icon_dyye62",
        title: "> 700+ Hours of HD Video Content",
      },
      {
        image:
          "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/qa-icon_fzkput",
        title: "Fast & Friendly Q&A Support",
      },
      {
        image:
          "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/worldwide-students-icon_bni0jb",
        title: "> 3,000,000 Students Worldwide",
      },
      {
        image:
          "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/updated-icon_zfausy",
        title: "Up-to-Date Courses",
      },
      {
        image:
          "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/new-courses-icon_a6gwgy",
        title: "New Courses Added Regularly",
      },
    ],
  },
  policyData: {
    image: "https://www.filepicker.io/api/file/q3KvpMMTkubdjMWhTvLT",
    title: "30 DAYS MONEY BACK GUARANTEE",
    subtitle:
      "Achieve your goals with our top-quality courses or get a full refund if you're not happy with the membership. No questions asked within 30 days!",
  },
  plansCardData: {
    title: "Join Now and Become a Pro Member!",
    planCards: [
      {
        title: "Annual Membership",
        subtitle: "Unlimited access to all current & future Academind courses",
        price: "249/year",
      },
      {
        title: "Monthly Membership",
        subtitle: "Best choice! Full flexibility and unlimited course access!",
        price: "25/month",
        popular: true,
      },
    ],
  },
  courseData: {
    title: "Courses Included with Purchase",
    courseCards: [
      {
        id: 1,
        slug: "ai-for-developers-with-github-copilot-cursor-chatgpt",
        image:
          "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/Pv1eJVW9SvOP22Raj8L3",
        title: "AI For Developers With GitHub Copilot, Cursor AI & ChatGPT",
        subtitle:
          "Leverage AI to boost your productivity as a developer: Use GitHub Copilot, Cursor AI and ChatGPT for efficient coding",
        price: "69",
        tutor: "Kalim Khan",
        category: "Frontend",
        aboutCourse: [
          "This is THE course developers should take to leverage AI efficiently!",
          "AI is not a threat—it’s an incredibly powerful tool that can help you become an even more efficient and productive developer. While AI can generate code snippets and assist with routine tasks, it still needs your developer knowledge to create safe, reliable and complex applications. This course is all about teaching you how to combine your developer skills with AI tools to boost your developer productivity.",
          "By learning how to use AI tools like GitHub Copilot and Cursor AI efficiently, you can make routine coding tasks faster and easier, leaving you more time to focus on the most important and creative aspects of development. This course shows you exactly how to do that.",
          "You’ll discover how to integrate AI seamlessly into your workflow, ensuring that it complements your knowledge without replacing the essential role you play as a developer. AI is here to enhance, not replace, your skills.",
          "Through practical demos with GitHub Copilot, Cursor AI and external services like ChatGPT, you’ll learn how to leverage AI to improve your coding speed, enhance productivity, and solve complex challenges more efficiently. Whether you’re just starting out or already have experience, this course will teach you how to use these tools to your advantage.",
        ],
        courseContent: [
          {
            topic: "Introduction to GitHub Copilot :",
            about:
              "Learn what GitHub Copilot is. Explore its core features like code suggestions, chat and contextual code assistance.",
          },
          {
            topic: "Advanced GitHub Copilot Usage :",
            about:
              "Dive into more advanced features such as generating unit tests, configuring chat settings and understanding how to prompt the AI for more complex tasks.",
          },
          {
            topic: "Mastering Cursor AI :",
            about:
              "Discover how Cursor helps with code completion, chat, Cursor Composer and smart suggestions to make coding faster and more intuitive.",
          },
          {
            topic: "External AI Tools :",
            about:
              "Learn how to integrate external services like ChatGPT into your workflow to streamline tasks like project planning, researching and even asset generation.",
          },
          {
            topic: "Real-World Practice Project :",
            about:
              "I’ll walk you through creating a REST API from scratch using AI tools. From planning and structuring the app to generating code, implementing features and fixing errors, you’ll see how AI tools can assist every step of the way.",
          },
          {
            topic: "Prompt Engineering Essentials :",
            about:
              "Learn how to fine-tune your prompts to get the best outputs from AI, helping you avoid common pitfalls and optimize efficiency.",
          },
          {
            topic: "Debugging and Troubleshooting with AI :",
            about:
              "See how AI tools can assist with error detection, fixing bugs and improving your code’s overall quality.",
          },
        ],
        tutorCourseReviewData: [
          "This course is short, practical, and straight to the point, designed to equip you with everything you need to start boosting your productivity right away.",
          "I think the future of development is about collaboration between AI and developers—and this course teaches you the tools you need to do so.",
          "Check out the full curriculum, watch the free preview videos and enrol now to take your coding efficiency to the next level with AI!",
        ],
        courseLengthData: {
          time: 5,
          lessons: 70,
        },
        coursePrerequisites: [
          "Basic understanding of programming concepts is required",
          "Familiarity with GitHub is recommended but not required",
          "No prior AI experience necessary to succeed in this course",
        ],
        reviewData: {
          title:
            "Don't take our word for it - see what your fellow students are saying",
          reviewCard: [
            {
              name: "Razvan",
              review:
                "The instructor is very clear and he knows very well the subject. He is very active if you do not find the answer in the questions and answers. Step by step explanations. 5 star for his effort and quality.",
            },
            {
              name: "Adir Avraham",
              review:
                "The pace is perfect. Not too fast and not too slow. It makes it easy to understand.",
            },
            {
              name: "Adam Victor",
              review:
                "I greatly appreciate the hands on learning / muscle memory I am learning from these lectures. My understanding/comprehension of angular front-end development has grown tremendously because of this course. Thank you",
            },
          ],
        },
        tutorComment:
          "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enable me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 2,500,000 students worldwide as well as a successful YouTube channel with 900.000 subscribers is the best proof for that.The most rewarding experience for me is to see how people find new, better jobs, build awesome web applications, work on amazing projects or simply enjoy their hobby with the help of my content.That's why, together with Manuel Lorenz, I founded Academind to offer the best possible learning experience and to share the pleasure of learning with our students.",
        courseFaqData: {
          title: "Frequently Asked Questions",
          questions: [
            {
              question: "When does the course start and finish?",
              answer:
                "You can dive into the courses immediately! It is completely self-paced - you decide when you start and when you finish. You will have access to all courses as long as you have an active subscription.",
            },
            {
              question: "What if I am unhappy with the subscription?",
              answer:
                "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us via email in the first 30 days after your initial purchase and we will give you a full refund. Please note that subsequent renewal payments are not eligible for refunds.",
            },
            {
              question: "How often am I charged?",
              answer:
                "Our monthly and yearly memberships are subscriptions - you therefore will be charged every month (monthly membership) or every year (yearly membership). You will be charged automatically unless you cancelled your subscription in your profile. If you cancel, you can still consume all materials until your current billing cycle (month or year) ends.",
            },
            {
              question: "Can I cancel anytime?",
              answer:
                "Yes! You can cancel your subscription anytime. If you do, you will not be charged again when the subscription would renew (i.e. after a month or a year). You will lose course access once your current billing cycle (month or year) ended.",
            },
          ],
        },
        coursePlansCardData: {
          title: "Join 1142 happy students!",
          planCards: [
            {
              title: "Single-Course License",
              subtitle:
                "Full access to 'AI For Developers With GitHub Copilot, Cursor AI & ChatGPT'",
              price: "69",
              accessibility: "Access to this course only.",
              info: "This is a one-time payment that grants access to this course only, not to any other courses.",
            },
            {
              title: "Academind Pro Membership",
              subtitle:
                "Unlimited access to this and all other current & future courses!",
              price: "25/month",
              popular: true,
            },
          ],
        },
        trailer:
          "https://videos.pexels.com/video-files/5495845/5495845-hd_1920_1080_30fps.mp4",
      },
      {
        id: 2,
        slug: "chatgpt-the-complete-guide",
        image:
          "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/ccLoMCzLSLSH11Oqvh0u",
        title: "ChatGPT - The Complete Guide",
        subtitle:
          "10x your productivity by using ChatGPT &amp; OpenAI APIs efficiently. Includes prompt templates &amp; hands-on examples.",
        price: "69",
        tutor: "Talib Chowdhary",
        category: "Frontend",
        aboutCourse: [
          "Unlock the power of AI and gain a huge productivity boost with our comprehensive online video course!",
          "Are you ready to harness the incredible potential of ChatGPT? Look no further! Our course, 'ChatGPT - The Complete Guide to ChatGPT & OpenAI APIs' is your all-in-one solution to mastering this revolutionary technology.",
        ],
        courseContent: [
          {
            topic: "Course Update November 2023 :",
            about:
              "Added an entire section about DALL-E 3 to generate images directly in ChatGPT.",
          },
          {
            topic: "Big Course Update September 2023 :",
            about:
              "Added round about 2h of new content on AI-powered developer tools like GitHub Copilot, Copilot Chat & Cursor IDE, Also added new content on Midjourney, a new section on Dall-E 2 & Elevenlabs (AI voice generator) + many smaller updates & improvements.",
          },
          {
            topic: "Course Update July 2023 :",
            about:
              "Added 1h of new content about ChatGPT Code Interpreter: Learn how to use ChatGPT to generate & execute code directly in the browser.",
          },
          {
            topic: "Course Update May 2023 :",
            about:
              "Added more deep-dive content on other AI tools (Midjourney, Google Bard & Microsoft Bing Chat).Unlock the power of AI and gain a huge productivity boost with our comprehensive online video course! Are you ready to harness the incredible potential of ChatGPT? Look no further! Our course, 'ChatGPT - The Complete Guide to ChatGPT & OpenAI APIs' is your all-in-one solution to mastering this revolutionary technology, Through this immersive, hands-on course, you'll discover.",
          },
          {
            topic: "All The Fundamentals :",
            about:
              "Dive into the world of ChatGPT, GPT models, and Large Language Models (LLMs). Learn the science and mechanics that drive these advanced AI systems.",
          },
          {
            topic: "Essential Skills :",
            about:
              "Master the ChatGPT interface, its key features, and how to craft both basic and complex prompts. Empower yourself with the tools needed to excel in the AI-driven landscape.",
          },
          {
            topic: "Prompt Engineering Mastery :",
            about:
              "Optimize your AI experience by learning basic and advanced prompt engineering techniques. Write efficient prompts that get you the precise results you're looking for.",
          },
        ],
        tutorCourseReviewData: [
          "By enrolling in this course, you're taking the first step towards a future powered by AI. No matter your background or experience level, our course is designed to provide you with the knowledge and skills you need to thrive in this rapidly evolving landscape.",
          "Don't miss this opportunity to become an AI pioneer! Enrol now, unlock your potential & transform your career today!",
          "This course covers it all: ChatGPT-powered copywriting, blog post & article generation, email / email draft generation, text summaries via ChatGPT, translations, tone adjustments, social media post generation, code generation, code debugging, refactoring & much, much more!",
        ],
        courseLengthData: {
          time: 15,
          lessons: 250,
        },
        coursePrerequisites: [
          "No prior ChatGPT, development or other knowledge is required!",
        ],
        reviewData: {
          title:
            "Don't take our word for it - see what your fellow students are saying",
          reviewCard: [
            {
              name: "Razvan",
              review:
                "The instructor is very clear and he knows very well the subject. He is very active if you do not find the answer in the questions and answers. Step by step explanations. 5 star for his effort and quality.",
            },
            {
              name: "Adir Avraham",
              review:
                "The pace is perfect. Not too fast and not too slow. It makes it easy to understand.",
            },
            {
              name: "Adam Victor",
              review:
                "I greatly appreciate the hands on learning / muscle memory I am learning from these lectures. My understanding/comprehension of angular front-end development has grown tremendously because of this course. Thank you",
            },
          ],
        },
        tutorComment:
          "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enable me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 2,500,000 students worldwide as well as a successful YouTube channel with 900.000 subscribers is the best proof for that.The most rewarding experience for me is to see how people find new, better jobs, build awesome web applications, work on amazing projects or simply enjoy their hobby with the help of my content.That's why, together with Manuel Lorenz, I founded Academind to offer the best possible learning experience and to share the pleasure of learning with our students.",
        courseFaqData: {
          title: "Frequently Asked Questions",
          questions: [
            {
              question: "When does the course start and finish?",
              answer:
                "You can dive into the courses immediately! It is completely self-paced - you decide when you start and when you finish. You will have access to all courses as long as you have an active subscription.",
            },
            {
              question: "What if I am unhappy with the subscription?",
              answer:
                "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us via email in the first 30 days after your initial purchase and we will give you a full refund. Please note that subsequent renewal payments are not eligible for refunds.",
            },
            {
              question: "How often am I charged?",
              answer:
                "Our monthly and yearly memberships are subscriptions - you therefore will be charged every month (monthly membership) or every year (yearly membership). You will be charged automatically unless you cancelled your subscription in your profile. If you cancel, you can still consume all materials until your current billing cycle (month or year) ends.",
            },
            {
              question: "Can I cancel anytime?",
              answer:
                "Yes! You can cancel your subscription anytime. If you do, you will not be charged again when the subscription would renew (i.e. after a month or a year). You will lose course access once your current billing cycle (month or year) ended.",
            },
          ],
        },
        coursePlansCardData: {
          title: "Join 1982 happy students!",
          planCards: [
            {
              title: "Single-Course License",
              subtitle: "Full access to 'chatgpt-the-complete-guide'",
              price: "69",
              accessibility: "Access to this course only.",
              info: "This is a one-time payment that grants access to this course only, not to any other courses.",
            },
            {
              title: "Academind Pro Membership",
              subtitle:
                "Unlimited access to this and all other current & future courses!",
              price: "25/month",
              popular: true,
            },
          ],
        },
        trailer:
          "https://videos.pexels.com/video-files/4974708/4974708-hd_1920_1080_25fps.mp4",
        courseCurriculumData: [
          {
            title: "Getting Started",
            chapters: [
              {
                title: "Welcome to the Course",
                timeLength: {
                  minutes: 1,
                  seconds: "08",
                },
                btnText: "Preview",
                id: 1,
                chapter_src:
                  "https://videos.pexels.com/video-files/6804706/6804706-uhd_2732_1440_25fps.mp4",
              },
              {
                title: "What Is React? And Why Would You Use It?",
                timeLength: {
                  minutes: 2,
                  seconds: 58,
                },
                btnText: "Preview",
                id: 2,
                chapter_src:
                  "https://videos.pexels.com/video-files/8275951/8275951-hd_1920_1080_30fps.mp4",
              },
              {
                title: "ReactJS vs Vanilla JavaScript",
                timeLength: {
                  minutes: 10,
                  seconds: 57,
                },
                btnText: "Preview",
                id: 3,
                chapter_src:
                  "https://videos.pexels.com/video-files/11274330/11274330-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "Editing Our First React App",
                timeLength: {
                  minutes: 4,
                  seconds: 22,
                },
                btnText: "Preview",
                id: 4,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989682/7989682-hd_1920_1080_25fps.mp4",
              },
            ],
          },
          {
            title: "JavaScript Refresher",
            chapters: [
              {
                title: "Module Introduction ",
                timeLength: {
                  minutes: 1,
                  seconds: 49,
                },
                btnText: "Start",
                id: 5,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989701/7989701-hd_1920_1080_25fps.mp4",
              },
              {
                title: "Starting Project",
                timeLength: {
                  minutes: 1,
                  seconds: "00",
                },
                btnText: "Start",
                id: 6,
                chapter_src:
                  "https://videos.pexels.com/video-files/28320042/12359943_1920_1080_24fps.mp4",
              },
              {
                title:
                  "Adding JavaScript To A Page & How React Projects Differ",
                timeLength: {
                  minutes: 6,
                  seconds: 57,
                },
                btnText: "Start",
                id: 7,
                chapter_src:
                  "https://videos.pexels.com/video-files/6258102/6258102-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "React Projects Use a Build Process",
                timeLength: {
                  minutes: 8,
                  seconds: "04",
                },
                btnText: "Start",
                id: 8,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989469/7989469-hd_1920_1080_25fps.mp4",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        slug: "go-the-complete-guide",
        image:
          "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/3GR2BjYPSwiRudTdf2lw",
        title: "Go - The Complete Guide",
        subtitle:
          "Learn Go ('Golang') from the ground up &amp; in great depth by building multiple demo projects, incl. a REST API",
        price: "69",
        tutor: "Aftab Js",
        category: "Backend",
        aboutCourse: [
          "Unleash Your Potential - with Go and this course!",
          "Welcome to 'Go - The Complete Guide,' the definitive online course meticulously designed for both newcomers and professionals eager to excel in the dynamic realm of Go programming.",
          "Why Go?",
          "In an era where efficiency and performance are paramount, Go stands out as a powerhouse. Designed by Google, it combines simplicity, robustness, and speed, making it the go-to language for modern backend development, cloud services, and high-performance applications.",
          "Course Overview",
          "This course is your comprehensive journey through the world of Go. From basic syntax to advanced features, this course covers every aspect needed to master Go.",
          "Here's what you'll learn:",
          "Go Fundamentals: Dive deep into Go syntax, variables, types, and control structures.",
          "Concurrent Programming: Unravel the power of Go's concurrency model with goroutines and channels.",
          "Complex Data Structures: Master arrays, slices, maps, and struct types for efficient data manipulation.",
          "Advanced Features: Explore interfaces, error handling, and package management.",
          "Real-World Applications: Build practical, real-world applications to consolidate your learning.",
          "Optimization Techniques: Learn best practices and optimization techniques for writing efficient Go code.",
        ],
        courseContent: [
          {
            topic: "This course is tailored for :",
            about:
              "Developers looking to add a powerful language to their toolkit, Backend engineers aspiring to build scalable, high-performance applications, Professionals seeking a deep, practical understanding of Go.",
          },
          {
            topic: "Expert Instruction :",
            about:
              "Learn from an experienced Go developer & bestselling online course instructor.",
          },
          {
            topic: "Flexible Learning :",
            about: "Access the course anytime, anywhere, at your pace.",
          },
          {
            topic: "Demo Projects :",
            about:
              " Apply your knowledge by building multiple demo projects - e.g., a complete REST API",
          },
          {
            topic: "Certificate of Completion :",
            about: "Earn a certificate to showcase your newfound Go expertise.",
          },
        ],
        tutorCourseReviewData: [
          "By enrolling in this course, you're taking the first step towards a future powered by AI. No matter your background or experience level, our course is designed to provide you with the knowledge and skills you need to thrive in this rapidly evolving landscape.",
          "Don't miss this opportunity to become an AI pioneer! Enrol now, unlock your potential & transform your career today!",
          "This course covers it all: ChatGPT-powered copywriting, blog post & article generation, email / email draft generation, text summaries via ChatGPT, translations, tone adjustments, social media post generation, code generation, code debugging, refactoring & much, much more!",
        ],
        courseLengthData: {
          time: 15,
          lessons: 200,
        },
        coursePrerequisites: [
          "Basic programming experience (with any language, doesn't matter) is strongly recommended",
          "NO prior Go knowledge is assumed",
          "No prior AI experience necessary to succeed in this course",
        ],
        reviewData: {
          title:
            "Don't take our word for it - see what your fellow students are saying",
          reviewCard: [
            {
              name: "Razvan",
              review:
                "The instructor is very clear and he knows very well the subject. He is very active if you do not find the answer in the questions and answers. Step by step explanations. 5 star for his effort and quality.",
            },
            {
              name: "Adir Avraham",
              review:
                "The pace is perfect. Not too fast and not too slow. It makes it easy to understand.",
            },
            {
              name: "Adam Victor",
              review:
                "I greatly appreciate the hands on learning / muscle memory I am learning from these lectures. My understanding/comprehension of angular front-end development has grown tremendously because of this course. Thank you",
            },
          ],
        },
        tutorComment:
          "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enable me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 2,500,000 students worldwide as well as a successful YouTube channel with 900.000 subscribers is the best proof for that.The most rewarding experience for me is to see how people find new, better jobs, build awesome web applications, work on amazing projects or simply enjoy their hobby with the help of my content.That's why, together with Manuel Lorenz, I founded Academind to offer the best possible learning experience and to share the pleasure of learning with our students.",
        courseFaqData: {
          title: "Frequently Asked Questions",
          questions: [
            {
              question: "When does the course start and finish?",
              answer:
                "You can dive into the courses immediately! It is completely self-paced - you decide when you start and when you finish. You will have access to all courses as long as you have an active subscription.",
            },
            {
              question: "What if I am unhappy with the subscription?",
              answer:
                "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us via email in the first 30 days after your initial purchase and we will give you a full refund. Please note that subsequent renewal payments are not eligible for refunds.",
            },
            {
              question: "How often am I charged?",
              answer:
                "Our monthly and yearly memberships are subscriptions - you therefore will be charged every month (monthly membership) or every year (yearly membership). You will be charged automatically unless you cancelled your subscription in your profile. If you cancel, you can still consume all materials until your current billing cycle (month or year) ends.",
            },
            {
              question: "Can I cancel anytime?",
              answer:
                "Yes! You can cancel your subscription anytime. If you do, you will not be charged again when the subscription would renew (i.e. after a month or a year). You will lose course access once your current billing cycle (month or year) ended.",
            },
          ],
        },
        coursePlansCardData: {
          title: "Join 2225 happy students!",
          planCards: [
            {
              title: "Single-Course License",
              subtitle: "Full access to 'go-the-complete-guide'",
              price: "69",
              accessibility: "Access to this course only.",
              info: "This is a one-time payment that grants access to this course only, not to any other courses.",
            },
            {
              title: "Academind Pro Membership",
              subtitle:
                "Unlimited access to this and all other current & future courses!",
              price: "25/month",
              popular: true,
            },
          ],
        },
        trailer:
          "https://videos.pexels.com/video-files/5474324/5474324-uhd_2732_1440_25fps.mp4",
        courseCurriculumData: [
          {
            title: "Getting Started",
            chapters: [
              {
                title: "Welcome to the Course",
                timeLength: {
                  minutes: 1,
                  seconds: "08",
                },
                btnText: "Preview",
                id: 1,
                chapter_src:
                  "https://videos.pexels.com/video-files/6804706/6804706-uhd_2732_1440_25fps.mp4",
              },
              {
                title: "What Is React? And Why Would You Use It?",
                timeLength: {
                  minutes: 2,
                  seconds: 58,
                },
                btnText: "Preview",
                id: 2,
                chapter_src:
                  "https://videos.pexels.com/video-files/8275951/8275951-hd_1920_1080_30fps.mp4",
              },
              {
                title: "ReactJS vs Vanilla JavaScript",
                timeLength: {
                  minutes: 10,
                  seconds: 57,
                },
                btnText: "Preview",
                id: 3,
                chapter_src:
                  "https://videos.pexels.com/video-files/11274330/11274330-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "Editing Our First React App",
                timeLength: {
                  minutes: 4,
                  seconds: 22,
                },
                btnText: "Preview",
                id: 4,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989682/7989682-hd_1920_1080_25fps.mp4",
              },
            ],
          },
          {
            title: "JavaScript Refresher",
            chapters: [
              {
                title: "Module Introduction ",
                timeLength: {
                  minutes: 1,
                  seconds: 49,
                },
                btnText: "Start",
                id: 5,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989701/7989701-hd_1920_1080_25fps.mp4",
              },
              {
                title: "Starting Project",
                timeLength: {
                  minutes: 1,
                  seconds: "00",
                },
                btnText: "Start",
                id: 6,
                chapter_src:
                  "https://videos.pexels.com/video-files/28320042/12359943_1920_1080_24fps.mp4",
              },
              {
                title:
                  "Adding JavaScript To A Page & How React Projects Differ",
                timeLength: {
                  minutes: 6,
                  seconds: 57,
                },
                btnText: "Start",
                id: 7,
                chapter_src:
                  "https://videos.pexels.com/video-files/6258102/6258102-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "React Projects Use a Build Process",
                timeLength: {
                  minutes: 8,
                  seconds: "04",
                },
                btnText: "Start",
                id: 8,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989469/7989469-hd_1920_1080_25fps.mp4",
              },
            ],
          },
        ],
        courseCurriculumData: [
          {
            title: "Getting Started",
            chapters: [
              {
                title: "Welcome to the Course",
                timeLength: {
                  minutes: 1,
                  seconds: "08",
                },
                btnText: "Preview",
                id: 1,
                chapter_src:
                  "https://videos.pexels.com/video-files/6804706/6804706-uhd_2732_1440_25fps.mp4",
              },
              {
                title: "What Is React? And Why Would You Use It?",
                timeLength: {
                  minutes: 2,
                  seconds: 58,
                },
                btnText: "Preview",
                id: 2,
                chapter_src:
                  "https://videos.pexels.com/video-files/8275951/8275951-hd_1920_1080_30fps.mp4",
              },
              {
                title: "ReactJS vs Vanilla JavaScript",
                timeLength: {
                  minutes: 10,
                  seconds: 57,
                },
                btnText: "Preview",
                id: 3,
                chapter_src:
                  "https://videos.pexels.com/video-files/11274330/11274330-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "Editing Our First React App",
                timeLength: {
                  minutes: 4,
                  seconds: 22,
                },
                btnText: "Preview",
                id: 4,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989682/7989682-hd_1920_1080_25fps.mp4",
              },
            ],
          },
          {
            title: "JavaScript Refresher",
            chapters: [
              {
                title: "Module Introduction ",
                timeLength: {
                  minutes: 1,
                  seconds: 49,
                },
                btnText: "Start",
                id: 5,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989701/7989701-hd_1920_1080_25fps.mp4",
              },
              {
                title: "Starting Project",
                timeLength: {
                  minutes: 1,
                  seconds: "00",
                },
                btnText: "Start",
                id: 6,
                chapter_src:
                  "https://videos.pexels.com/video-files/28320042/12359943_1920_1080_24fps.mp4",
              },
              {
                title:
                  "Adding JavaScript To A Page & How React Projects Differ",
                timeLength: {
                  minutes: 6,
                  seconds: 57,
                },
                btnText: "Start",
                id: 7,
                chapter_src:
                  "https://videos.pexels.com/video-files/6258102/6258102-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "React Projects Use a Build Process",
                timeLength: {
                  minutes: 8,
                  seconds: "04",
                },
                btnText: "Start",
                id: 8,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989469/7989469-hd_1920_1080_25fps.mp4",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        slug: "javascript-algorithms-the-fundamentals",
        image:
          "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/TWqzpMxDQ62UQUwxsGAA",
        title: "JavaScript Algorithms - The Fundamentals",
        subtitle:
          "Learn all the core basics and fundamentals about JavaScript algorithms, dive into tons of examples and get a plan for building and measuring algorithms.",
        price: "89",
        tutor: "Haseeb Siddiqui",
        category: "AWS",
        aboutCourse: [
          "Algorithms are a complex, yet vital part of programming and of being a developer!",
          "Being able to come up with algorithms (= being able to solve problems) is extremely important, not only for interviews but also in general to grow as a developer.",
          "But diving into algorithms and finding the best possible solution for a given problem can be a daunting task.",
          "And even once you have found a solution, it might not be the best one.",
          "This course helps you with all of that!",
          "You will learn what algorithms are, which kinds of algorithms you may find out there and most importantly, you will learn how to derive algorithms and how to judge as well as compare them!",
          "We will dive into this complex topic step by step and by the end of the course, you will have a very strong foundation and all the core fundamental concepts you need to build and optimize your own algorithms for any problem out there!",
        ],
        courseContent: [
          {
            topic: "",
            about: "How to use recursion with algorithms",
          },
          {
            topic: "",
            about: "Optimization approaches like 'Dynamic Programming'",
          },
          {
            topic: "",
            about:
              "All core concepts you need for math, search, sorting and sets/ array algorithms",
          },
          {
            topic: "",
            about:
              "Different kinds of solving problems (e.g. greedy approaches, dynamic approaches)",
          },
          {
            topic: "",
            about:
              "By the end of the course, you will have a very solid foundation and a plan on how to tackle any problem and find a fitting algorithm! You will be well-prepared to dive deeper and explore more problems and algorithms.",
          },
        ],
        tutorCourseReviewData: [
          "The different concepts are taught step by step with small, focused code examples and all building blocks being visualized on slides to make understanding them as easy as possible!",
          "This course is for you if you want to take the next step as a developer, if you want to ace interviews or if you simply want to grow as a developer.",
          "It assumes no prior algorithm knowledge but you of course need solid programming fundamentals - preferably in JavaScript, the programming language used in this course.",
        ],
        courseLengthData: {
          time: 9,
          lessons: 90,
        },
        coursePrerequisites: [
          "Basic programming experience (preferably in JavaScript) is required",
        ],
        reviewData: {
          title:
            "Don't take our word for it - see what your fellow students are saying",
          reviewCard: [
            {
              name: "Razvan",
              review:
                "The instructor is very clear and he knows very well the subject. He is very active if you do not find the answer in the questions and answers. Step by step explanations. 5 star for his effort and quality.",
            },
            {
              name: "Adir Avraham",
              review:
                "The pace is perfect. Not too fast and not too slow. It makes it easy to understand.",
            },
            {
              name: "Adam Victor",
              review:
                "I greatly appreciate the hands on learning / muscle memory I am learning from these lectures. My understanding/comprehension of angular front-end development has grown tremendously because of this course. Thank you",
            },
          ],
        },
        tutorComment:
          "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enable me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 2,500,000 students worldwide as well as a successful YouTube channel with 900.000 subscribers is the best proof for that.The most rewarding experience for me is to see how people find new, better jobs, build awesome web applications, work on amazing projects or simply enjoy their hobby with the help of my content.That's why, together with Manuel Lorenz, I founded Academind to offer the best possible learning experience and to share the pleasure of learning with our students.",
        courseFaqData: {
          title: "Frequently Asked Questions",
          questions: [
            {
              question: "When does the course start and finish?",
              answer:
                "You can dive into the courses immediately! It is completely self-paced - you decide when you start and when you finish. You will have access to all courses as long as you have an active subscription.",
            },
            {
              question: "What if I am unhappy with the subscription?",
              answer:
                "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us via email in the first 30 days after your initial purchase and we will give you a full refund. Please note that subsequent renewal payments are not eligible for refunds.",
            },
            {
              question: "How often am I charged?",
              answer:
                "Our monthly and yearly memberships are subscriptions - you therefore will be charged every month (monthly membership) or every year (yearly membership). You will be charged automatically unless you cancelled your subscription in your profile. If you cancel, you can still consume all materials until your current billing cycle (month or year) ends.",
            },
            {
              question: "Can I cancel anytime?",
              answer:
                "Yes! You can cancel your subscription anytime. If you do, you will not be charged again when the subscription would renew (i.e. after a month or a year). You will lose course access once your current billing cycle (month or year) ended.",
            },
          ],
        },
        coursePlansCardData: {
          title: "Join 2225 happy students!",
          planCards: [
            {
              title: "Single-Course License",
              subtitle:
                "Full access to 'javascript-algorithms-the-fundamentals'",
              price: "89",
              accessibility: "Access to this course only.",
              info: "This is a one-time payment that grants access to this course only, not to any other courses.",
            },
            {
              title: "Academind Pro Membership",
              subtitle:
                "Unlimited access to this and all other current & future courses!",
              price: "25/month",
              popular: true,
            },
          ],
        },
        trailer:
          "https://videos.pexels.com/video-files/7534244/7534244-sd_640_360_25fps.mp4",
        courseCurriculumData: [
          {
            title: "Getting Started",
            chapters: [
              {
                title: "Welcome to the Course",
                timeLength: {
                  minutes: 1,
                  seconds: "08",
                },
                btnText: "Preview",
                id: 1,
                chapter_src:
                  "https://videos.pexels.com/video-files/6804706/6804706-uhd_2732_1440_25fps.mp4",
              },
              {
                title: "What Is React? And Why Would You Use It?",
                timeLength: {
                  minutes: 2,
                  seconds: 58,
                },
                btnText: "Preview",
                id: 2,
                chapter_src:
                  "https://videos.pexels.com/video-files/8275951/8275951-hd_1920_1080_30fps.mp4",
              },
              {
                title: "ReactJS vs Vanilla JavaScript",
                timeLength: {
                  minutes: 10,
                  seconds: 57,
                },
                btnText: "Preview",
                id: 3,
                chapter_src:
                  "https://videos.pexels.com/video-files/11274330/11274330-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "Editing Our First React App",
                timeLength: {
                  minutes: 4,
                  seconds: 22,
                },
                btnText: "Preview",
                id: 4,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989682/7989682-hd_1920_1080_25fps.mp4",
              },
            ],
          },
          {
            title: "JavaScript Refresher",
            chapters: [
              {
                title: "Module Introduction ",
                timeLength: {
                  minutes: 1,
                  seconds: 49,
                },
                btnText: "Start",
                id: 5,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989701/7989701-hd_1920_1080_25fps.mp4",
              },
              {
                title: "Starting Project",
                timeLength: {
                  minutes: 1,
                  seconds: "00",
                },
                btnText: "Start",
                id: 6,
                chapter_src:
                  "https://videos.pexels.com/video-files/28320042/12359943_1920_1080_24fps.mp4",
              },
              {
                title:
                  "Adding JavaScript To A Page & How React Projects Differ",
                timeLength: {
                  minutes: 6,
                  seconds: 57,
                },
                btnText: "Start",
                id: 7,
                chapter_src:
                  "https://videos.pexels.com/video-files/6258102/6258102-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "React Projects Use a Build Process",
                timeLength: {
                  minutes: 8,
                  seconds: "04",
                },
                btnText: "Start",
                id: 8,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989469/7989469-hd_1920_1080_25fps.mp4",
              },
            ],
          },
        ],
      },

      {
        id: 5,
        slug: "angular-the-complete-guide",
        image:
          "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/i1DcBATmXyII6bC5jKQJ",
        title: "Angular - The Complete Guide",
        subtitle:
          "Master Angular (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js.",
        price: "99",
        tutor: "Haseeb Siddiqui",
        category: "Web Development",
        aboutCourse: [
          "Angular is one of the most popular web development frameworks you can learn these days - especially in the enterprise landscape.",
          "It offers amazing performance, a versatile syntax & API, a 'batteries-included' philosophy where key features like routing are included and an active and helpful community.",
          "And with this course, you'll learn Angular from the ground up and in great detail - all whilst building multiple demo projects. Therefore, concepts are explained & explored not just in theory, but instead by applying your knowledge to real problems!",
          "This is a huge course because it really covers EVERYTHING you need to know and learn to become an Angular developer!",
          "No matter if you know nothing about Angular or if you already got some basic Angular knowledge (not required but also not a problem), you will get tons of useful information and knowledge out of this course!",
          "Because my goal with this course is to ensure that you feel confident working with Angular, so that you can apply for Angular jobs, use it in your own projects or simply enhance your portfolio as a developer - whatever your goal is: This course gets you there!",
          "For this course, no prior Angular knowledge is required - instead, the course starts with a very thorough 'Essentials' section that will get you up and running with Angular's core features in just a few hours!",
        ],
        courseContent: [
          {
            topic: "",
            about:
              "A thorough introduction to Angular (What is it and why would you use it?)",
          },
          {
            topic: "",
            about:
              "All the core essentials: How Angular works, building components with Angular & building UIs with Angular",
          },
          {
            topic: "",
            about:
              "Components, inputs, outputs & dynamic data binding (with and without signals)",
          },
          {
            topic: "",
            about:
              "Working with user events and state to create interactive applications",
          },
          {
            topic: "",
            about:
              "A (thorough) look behind the scenes to understand how Angular works under the hood",
          },
        ],
        tutorCourseReviewData: [
          "This really is the 'Complete Guide' - promised!",
          "And best of all?",
          "You don't need any prior Angular knowledge!",
          "This course starts with zero knowledge assumed! All you need is basic web development and JavaScript knowledge (though the course even includes a brief JavaScript refresher to ensure that we're all on the same page!).",
          "Check out the full curriculum, the free preview videos and join the course risk-free thanks to the 30-day money-back guarantee!",
        ],
        courseLengthData: {
          time: 30,
          lessons: 190,
        },
        coursePrerequisites: [
          "Basic JavaScript knowledge is required",
          "NO prior Angular or TypeScript knowledge required",
        ],
        reviewData: {
          title:
            "Don't take our word for it - see what your fellow students are saying",
          reviewCard: [
            {
              name: "Razvan",
              review:
                "The instructor is very clear and he knows very well the subject. He is very active if you do not find the answer in the questions and answers. Step by step explanations. 5 star for his effort and quality.",
            },
            {
              name: "Adir Avraham",
              review:
                "The pace is perfect. Not too fast and not too slow. It makes it easy to understand.",
            },
            {
              name: "Adam Victor",
              review:
                "I greatly appreciate the hands on learning / muscle memory I am learning from these lectures. My understanding/comprehension of angular front-end development has grown tremendously because of this course. Thank you",
            },
          ],
        },
        tutorComment:
          "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enable me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 2,500,000 students worldwide as well as a successful YouTube channel with 900.000 subscribers is the best proof for that.The most rewarding experience for me is to see how people find new, better jobs, build awesome web applications, work on amazing projects or simply enjoy their hobby with the help of my content.That's why, together with Manuel Lorenz, I founded Academind to offer the best possible learning experience and to share the pleasure of learning with our students.",
        courseFaqData: {
          title: "Frequently Asked Questions",
          questions: [
            {
              question: "When does the course start and finish?",
              answer:
                "You can dive into the courses immediately! It is completely self-paced - you decide when you start and when you finish. You will have access to all courses as long as you have an active subscription.",
            },
            {
              question: "What if I am unhappy with the subscription?",
              answer:
                "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us via email in the first 30 days after your initial purchase and we will give you a full refund. Please note that subsequent renewal payments are not eligible for refunds.",
            },
            {
              question: "How often am I charged?",
              answer:
                "Our monthly and yearly memberships are subscriptions - you therefore will be charged every month (monthly membership) or every year (yearly membership). You will be charged automatically unless you cancelled your subscription in your profile. If you cancel, you can still consume all materials until your current billing cycle (month or year) ends.",
            },
            {
              question: "Can I cancel anytime?",
              answer:
                "Yes! You can cancel your subscription anytime. If you do, you will not be charged again when the subscription would renew (i.e. after a month or a year). You will lose course access once your current billing cycle (month or year) ended.",
            },
          ],
        },
        coursePlansCardData: {
          title: "Join 3455 happy students!",
          planCards: [
            {
              title: "Single-Course License",
              subtitle: "Full access to 'angular-the-complete-guide'",
              price: "89",
              accessibility: "Access to this course only.",
              info: "This is a one-time payment that grants access to this course only, not to any other courses.",
            },
            {
              title: "Academind Pro Membership",
              subtitle:
                "Unlimited access to this and all other current & future courses!",
              price: "25/month",
              popular: true,
            },
          ],
        },
        trailer:
          "https://videos.pexels.com/video-files/6962343/6962343-hd_1920_1080_25fps.mp4",
        courseCurriculumData: [
          {
            title: "Getting Started",
            chapters: [
              {
                title: "Welcome to the Course",
                timeLength: {
                  minutes: 1,
                  seconds: "08",
                },
                btnText: "Preview",
                id: 1,
                chapter_src:
                  "https://videos.pexels.com/video-files/6804706/6804706-uhd_2732_1440_25fps.mp4",
              },
              {
                title: "What Is React? And Why Would You Use It?",
                timeLength: {
                  minutes: 2,
                  seconds: 58,
                },
                btnText: "Preview",
                id: 2,
                chapter_src:
                  "https://videos.pexels.com/video-files/8275951/8275951-hd_1920_1080_30fps.mp4",
              },
              {
                title: "ReactJS vs Vanilla JavaScript",
                timeLength: {
                  minutes: 10,
                  seconds: 57,
                },
                btnText: "Preview",
                id: 3,
                chapter_src:
                  "https://videos.pexels.com/video-files/11274330/11274330-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "Editing Our First React App",
                timeLength: {
                  minutes: 4,
                  seconds: 22,
                },
                btnText: "Preview",
                id: 4,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989682/7989682-hd_1920_1080_25fps.mp4",
              },
            ],
          },
          {
            title: "JavaScript Refresher",
            chapters: [
              {
                title: "Module Introduction ",
                timeLength: {
                  minutes: 1,
                  seconds: 49,
                },
                btnText: "Start",
                id: 5,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989701/7989701-hd_1920_1080_25fps.mp4",
              },
              {
                title: "Starting Project",
                timeLength: {
                  minutes: 1,
                  seconds: "00",
                },
                btnText: "Start",
                id: 6,
                chapter_src:
                  "https://videos.pexels.com/video-files/28320042/12359943_1920_1080_24fps.mp4",
              },
              {
                title:
                  "Adding JavaScript To A Page & How React Projects Differ",
                timeLength: {
                  minutes: 6,
                  seconds: 57,
                },
                btnText: "Start",
                id: 7,
                chapter_src:
                  "https://videos.pexels.com/video-files/6258102/6258102-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "React Projects Use a Build Process",
                timeLength: {
                  minutes: 8,
                  seconds: "04",
                },
                btnText: "Start",
                id: 8,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989469/7989469-hd_1920_1080_25fps.mp4",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        slug: "react-the-complete-guide-course",
        image:
          "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/zRE6jb1GS0eMC8zAD9Fe",
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        subtitle:
          "Learn React.js from scratch! Learn Reactjs, Redux, React Routing, Animations, NextJS & more!",
        price: "99",
        tutor: "Kalim Khan",
        category: "Web Development",
        aboutCourse: [
          "This bestselling course has turned more than 750,000 students into ReactJS developers!",
          "Updated January 2024:",
          "Added brand-new content (~3h) on the NextJS App Router",
          "Added a brand-new 'Best Practices & Patterns' section",
          "Updated October 2023:",
          "Re-recorded roughly the first half of the course (up to the 'Diving into Redux' section, excluding that section)",
          "This course is completely up-to-date with the very latest version of React with all the core, modern features you need to know & teaches you React in a practical, hands-on way!",
          "A Course For Busy Customers & Business Professionals!",
          "This course also comes with two paths which you can take: The 'complete' path (full >40h course) and the 'summary' (fast-track) path (~4h summary module) - you can choose the path that best fits your time requirements!",
        ],
        courseContent: [
          {
            topic: "",
            about:
              "React.js is THE most popular JavaScript library you can use and learn these days to build modern, reactive user interfaces for the web.",
          },
          {
            topic: "",
            about:
              "This course teaches you React in-depth, from the ground up, step by step by diving into all the core basics, exploring tons of examples and also introducing you to advanced concepts as well.",
          },
          {
            topic: "",
            about:
              "You'll get all the theory, tons of examples and demos, assignments and exercises and tons of important knowledge that is skipped by most other resources - after all, there is a reason why this course is that huge! :)",
          },
          {
            topic: "",
            about:
              "And in case you don't even know why you would want to learn React and you're just here because of some ad or 'the algorithm' - no worries: ReactJS is a key technology as a web developer and in this course I will also explain WHY it's that important!",
          },
          {
            topic: "",
            about: "Welcome to 'React - The Complete Guide'!",
          },
          {
            topic: "",
            about:
              "This course will teach you React.js in a practice-oriented way, using all the latest patterns and best practices you need. You will learn all the key fundamentals as well as advanced concepts and related topics to turn you into a React.js developer.",
          },
          {
            topic: "",
            about:
              "This is a huge course because it really covers EVERYTHING you need to know and learn to become a React.js developer!",
          },
        ],
        tutorCourseReviewData: [
          "A thorough introduction to React.js (What is it and why would you use it?)",
          "All the core basics: How React works, building components with React & building UIs with React",
          "Components, props & dynamic data binding",
          "Working with user events and state to create interactive applications",
          "A (thorough) look behind the scenes to understand how React works under the hood",
        ],
        coursePrerequisites: [
          "Basic JavaScript knowledge is required",
          "NO React knowledge is required at all",
        ],
        courseLengthData: {
          time: 60,
          lessons: 500,
        },
        reviewData: {
          title:
            "Don't take our word for it - see what your fellow students are saying",
          reviewCard: [
            {
              name: "Razvan",
              review:
                "The instructor is very clear and he knows very well the subject. He is very active if you do not find the answer in the questions and answers. Step by step explanations. 5 star for his effort and quality.",
            },
            {
              name: "Adir Avraham",
              review:
                "The pace is perfect. Not too fast and not too slow. It makes it easy to understand.",
            },
            {
              name: "Adam Victor",
              review:
                "I greatly appreciate the hands on learning / muscle memory I am learning from these lectures. My understanding/comprehension of angular front-end development has grown tremendously because of this course. Thank you",
            },
          ],
        },
        tutorComment:
          "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enable me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 2,500,000 students worldwide as well as a successful YouTube channel with 900.000 subscribers is the best proof for that.The most rewarding experience for me is to see how people find new, better jobs, build awesome web applications, work on amazing projects or simply enjoy their hobby with the help of my content.That's why, together with Manuel Lorenz, I founded Academind to offer the best possible learning experience and to share the pleasure of learning with our students.",
        courseFaqData: {
          title: "Frequently Asked Questions",
          questions: [
            {
              question: "When does the course start and finish?",
              answer:
                "You can dive into the courses immediately! It is completely self-paced - you decide when you start and when you finish. You will have access to all courses as long as you have an active subscription.",
            },
            {
              question: "What if I am unhappy with the subscription?",
              answer:
                "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us via email in the first 30 days after your initial purchase and we will give you a full refund. Please note that subsequent renewal payments are not eligible for refunds.",
            },
            {
              question: "How often am I charged?",
              answer:
                "Our monthly and yearly memberships are subscriptions - you therefore will be charged every month (monthly membership) or every year (yearly membership). You will be charged automatically unless you cancelled your subscription in your profile. If you cancel, you can still consume all materials until your current billing cycle (month or year) ends.",
            },
            {
              question: "Can I cancel anytime?",
              answer:
                "Yes! You can cancel your subscription anytime. If you do, you will not be charged again when the subscription would renew (i.e. after a month or a year). You will lose course access once your current billing cycle (month or year) ended.",
            },
          ],
        },
        coursePlansCardData: {
          title: "Join 17455 happy students!",
          planCards: [
            {
              title: "Single-Course License",
              subtitle: "Full access to 'react-the-complete-guide-course'",
              price: "99",
              accessibility: "Access to this course only.",
              info: "This is a one-time payment that grants access to this course only, not to any other courses.",
            },
            {
              title: "Academind Pro Membership",
              subtitle:
                "Unlimited access to this and all other current & future courses!",
              price: "25/month",
              popular: true,
            },
          ],
        },
        trailer:
          "https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4",
        courseCurriculumData: [
          {
            title: "Getting Started",
            chapters: [
              {
                title: "Welcome to the Course",
                timeLength: {
                  minutes: 1,
                  seconds: "08",
                },
                btnText: "Preview",
                id: 1,
                chapter_src:
                  "https://videos.pexels.com/video-files/6804706/6804706-uhd_2732_1440_25fps.mp4",
              },
              {
                title: "What Is React? And Why Would You Use It?",
                timeLength: {
                  minutes: 2,
                  seconds: 58,
                },
                btnText: "Preview",
                id: 2,
                chapter_src:
                  "https://videos.pexels.com/video-files/8275951/8275951-hd_1920_1080_30fps.mp4",
              },
              {
                title: "ReactJS vs Vanilla JavaScript",
                timeLength: {
                  minutes: 10,
                  seconds: 57,
                },
                btnText: "Preview",
                id: 3,
                chapter_src:
                  "https://videos.pexels.com/video-files/11274330/11274330-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "Editing Our First React App",
                timeLength: {
                  minutes: 4,
                  seconds: 22,
                },
                btnText: "Preview",
                id: 4,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989682/7989682-hd_1920_1080_25fps.mp4",
              },
            ],
          },
          {
            title: "JavaScript Refresher",
            chapters: [
              {
                title: "Module Introduction ",
                timeLength: {
                  minutes: 1,
                  seconds: 49,
                },
                btnText: "Start",
                id: 5,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989701/7989701-hd_1920_1080_25fps.mp4",
              },
              {
                title: "Starting Project",
                timeLength: {
                  minutes: 1,
                  seconds: "00",
                },
                btnText: "Start",
                id: 6,
                chapter_src:
                  "https://videos.pexels.com/video-files/28320042/12359943_1920_1080_24fps.mp4",
              },
              {
                title:
                  "Adding JavaScript To A Page & How React Projects Differ",
                timeLength: {
                  minutes: 6,
                  seconds: 57,
                },
                btnText: "Start",
                id: 7,
                chapter_src:
                  "https://videos.pexels.com/video-files/6258102/6258102-uhd_2560_1440_25fps.mp4",
              },
              {
                title: "React Projects Use a Build Process",
                timeLength: {
                  minutes: 8,
                  seconds: "04",
                },
                btnText: "Start",
                id: 8,
                chapter_src:
                  "https://videos.pexels.com/video-files/7989469/7989469-hd_1920_1080_25fps.mp4",
              },
            ],
          },
        ],
      },
    ],
    filterTabNames: ["Category", "Author"],
    filterCategoryOptions: [
      "All",
      "Web Development",
      "Frontend",
      "AWS",
      "Python",
      "Testing",
      "AI",
      "Mobile Apps",
      "Fullstack",
      "Development Operations",
      "Data Analytics",
      "Membership",
    ],
    filtertutorsOptions: [
      "All",
      "Kalim Khan",
      "Talib Chowdhary",
      "Haseeb Siddiqui",
      "Aftab Js",
    ],
  },
  reviewData: {
    title:
      "Don't take our word for it - see what your fellow students are saying",
    reviewCard: [
      {
        name: "Robert Kwarta",
        review:
          "Max is truly an amazingly talented gift to the development community. His courses are very thoughtfully conceived and arranged and are expertly delivered with clarity, detail, explanation, and authority.",
      },
      {
        name: "Damien Briggs",
        review:
          "As always with Maximilian Schwarzmüller, the explanation of each concept is exceptionally clear and the structure of the material is superb.",
      },
      {
        name: "Brett Gamble",
        review:
          "The depth of the tutorials and the explanations provided make this a really well thought out learning experience. I would recommend any of the Academind courses to anyone wanting to really learn front end web development (JavaScript, React, Angular, Html & Css).",
      },
    ],
  },
  faqData: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "When does the course start and finish?",
        answer:
          "You can dive into the courses immediately! It is completely self-paced - you decide when you start and when you finish. You will have access to all courses as long as you have an active subscription.",
      },
      {
        question: "What if I am unhappy with the subscription?",
        answer:
          "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us via email in the first 30 days after your initial purchase and we will give you a full refund. Please note that subsequent renewal payments are not eligible for refunds.",
      },
      {
        question: "How often am I charged?",
        answer:
          "Our monthly and yearly memberships are subscriptions - you therefore will be charged every month (monthly membership) or every year (yearly membership). You will be charged automatically unless you cancelled your subscription in your profile. If you cancel, you can still consume all materials until your current billing cycle (month or year) ends.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes! You can cancel your subscription anytime. If you do, you will not be charged again when the subscription would renew (i.e. after a month or a year). You will lose course access once your current billing cycle (month or year) ended.",
      },
    ],
  },
  footerData: {
    title: "© Academind 2025",
    links: [
      { title: "Terms of Use", href: "/terms" },
      { title: "Privacy Policy", href: "/policy" },
    ],
  },
};
