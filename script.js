const topics = {

    collection: {
        number: "01",
        icon: "🌧️",
        title: "Water Collection",
        intro:
            "Water collection is the first step of rainwater harvesting. Rainwater falling on rooftops and other surfaces is directed towards a collection system.",
        content: `
            <p><strong>How it works:</strong></p>

            <ul>
                <li>Rain falls on the rooftop or catchment area.</li>
                <li>Gutters collect the water flowing from the roof.</li>
                <li>Pipes carry the collected water towards a filter or storage tank.</li>
                <li>A first-flush system can remove the initial dirty rainwater.</li>
            </ul>
        `,
        fact:
            "A rooftop can act as an efficient catchment surface for collecting rainwater."
    },


    harvesting: {
        number: "02",
        icon: "💧",
        title: "Rainwater Harvesting",
        intro:
            "Rainwater harvesting is the process of collecting, filtering and storing rainwater for useful purposes or allowing it to recharge groundwater.",
        content: `
            <p><strong>Main stages:</strong></p>

            <ul>
                <li>Collection of rainwater.</li>
                <li>Transportation through pipes.</li>
                <li>Filtration of unwanted materials.</li>
                <li>Storage or groundwater recharge.</li>
            </ul>
        `,
        fact:
            "Rainwater harvesting can reduce dependence on traditional water sources."
    },


    filtration: {
        number: "03",
        icon: "🔬",
        title: "Filtration",
        intro:
            "Before stored rainwater is used, unwanted materials such as leaves, dust and other particles can be removed using filters.",
        content: `
            <p><strong>Common filter materials include:</strong></p>

            <ul>
                <li>Gravel</li>
                <li>Sand</li>
                <li>Charcoal</li>
                <li>Mesh or screens</li>
            </ul>

            <p>
                Filtration improves the physical quality of harvested water,
                although water intended for drinking needs appropriate treatment and testing.
            </p>
        `,
        fact:
            "Different layers of filter media can trap particles of different sizes."
    },


    storage: {
        number: "04",
        icon: "🛢️",
        title: "Water Storage",
        intro:
            "After filtration, rainwater can be stored in tanks or containers for later use.",
        content: `
            <p><strong>Good storage practices:</strong></p>

            <ul>
                <li>Use a clean and covered tank.</li>
                <li>Prevent insects and debris from entering.</li>
                <li>Keep the storage system maintained.</li>
                <li>Use an overflow arrangement when the tank becomes full.</li>
            </ul>
        `,
        fact:
            "Covered storage helps reduce contamination and unwanted evaporation."
    },


    reuse: {
        number: "05",
        icon: "♻️",
        title: "Water Reuse",
        intro:
            "Collected rainwater can be used for several activities, reducing the demand for treated freshwater.",
        content: `
            <p><strong>Possible uses include:</strong></p>

            <ul>
                <li>Gardening and watering plants.</li>
                <li>Cleaning outdoor areas.</li>
                <li>Flushing toilets, where suitable systems are installed.</li>
                <li>Other non-drinking household purposes.</li>
            </ul>
        `,
        fact:
            "Using harvested rainwater for suitable non-drinking purposes can save treated water."
    },


    benefits: {
        number: "06",
        icon: "🌱",
        title: "Benefits",
        intro:
            "Rainwater harvesting provides environmental, social and economic benefits when designed and maintained properly.",
        content: `
            <p><strong>Major benefits:</strong></p>

            <ul>
                <li>Conserves freshwater.</li>
                <li>Helps recharge groundwater.</li>
                <li>Can reduce surface runoff.</li>
                <li>Provides an additional water source.</li>
                <li>Encourages responsible water use.</li>
            </ul>
        `,
        fact:
            "Rainwater harvesting can be especially useful in areas where groundwater levels are falling."
    },


    science: {
        number: "07",
        icon: "⚡",
        title: "Science Behind It",
        intro:
            "Rainwater harvesting combines simple ideas from physics, environmental science and water management.",
        content: `
            <p><strong>Important scientific ideas:</strong></p>

            <ul>
                <li>Gravity helps water flow from higher surfaces to lower points.</li>
                <li>Filtration separates suspended particles from water.</li>
                <li>Storage allows collected water to be used later.</li>
                <li>Groundwater recharge allows water to move into the soil and underground layers.</li>
            </ul>

            <p>
                The system works mainly by using gravity, controlled flow,
                filtration and storage.
            </p>
        `,
        fact:
            "Many rainwater harvesting systems can operate with very little energy because gravity does much of the work."
    }

};


/* ================= PAGE NAVIGATION ================= */

function showMainPage() {

    document.getElementById("introPage").classList.add("hidden");

    document.getElementById("detailPage").classList.add("hidden");

    document.getElementById("mainPage").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function openTopic(topicName) {

    const topic = topics[topicName];

    if (!topic) return;

    document.getElementById("mainPage").classList.add("hidden");

    document.getElementById("introPage").classList.add("hidden");

    document.getElementById("detailPage").classList.remove("hidden");


    document.getElementById("detailNumber").textContent =
        topic.number;

    document.getElementById("detailIcon").textContent =
        topic.icon;

    document.getElementById("detailTitle").textContent =
        topic.title;

    document.getElementById("detailIntro").textContent =
        topic.intro;

    document.getElementById("detailContent").innerHTML =
        topic.content;

    document.getElementById("didYouKnow").textContent =
        topic.fact;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function backToMain() {

    document.getElementById("detailPage").classList.add("hidden");

    document.getElementById("detailPage").classList.remove("page");

    document.getElementById("mainPage").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
