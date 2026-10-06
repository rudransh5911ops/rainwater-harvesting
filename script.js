/* ==========================================
   RAINWATER HARVESTING WEBSITE
   Created by Rudransh
   ========================================== */


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


/* ================= TOPIC DATA ================= */

const topics = {

    collection: {
        icon: "💧",
        title: "Water Collection",

        content: `
            <h2>What is Water Collection?</h2>

            <p>
                Water collection is the first major step in a rainwater
                harvesting system. Rainwater falling on a suitable surface,
                such as a rooftop, is collected and directed towards a
                storage or filtration system.
            </p>

            <h2>How does it work?</h2>

            <div class="step">
                <strong>Step 1 — Rainfall</strong>
                <p>
                    Rain falls on the roof or another suitable collection
                    surface.
                </p>
            </div>

            <div class="step">
                <strong>Step 2 — Collection</strong>
                <p>
                    Gutters and pipes collect the water flowing from the
                    roof.
                </p>
            </div>

            <div class="step">
                <strong>Step 3 — Transportation</strong>
                <p>
                    Pipes carry the collected water towards a filter or
                    storage tank.
                </p>
            </div>

            <h2>Why is it important?</h2>

            <p>
                Instead of allowing rainwater to simply run away, collection
                allows us to capture and use an important natural resource.
            </p>
        `
    },


    harvesting: {
        icon: "🌧️",
        title: "Rainwater Harvesting",

        content: `
            <h2>What is Rainwater Harvesting?</h2>

            <p>
                Rainwater harvesting is the process of collecting rainwater,
                filtering it and storing it for suitable future uses.
            </p>

            <h2>Complete Working</h2>

            <div class="step">
                <strong>1. Collection</strong>
                <p>
                    Rainwater is collected from rooftops or other suitable
                    surfaces.
                </p>
            </div>

            <div class="step">
                <strong>2. Filtration</strong>
                <p>
                    The collected water passes through a filtration system
                    that removes unwanted particles.
                </p>
            </div>

            <div class="step">
                <strong>3. Storage</strong>
                <p>
                    Filtered water can be stored in a suitable tank.
                </p>
            </div>

            <div class="step">
                <strong>4. Reuse</strong>
                <p>
                    Stored water can be used for appropriate purposes such
                    as gardening, cleaning and other non-drinking uses,
                    depending on the treatment and local requirements.
                </p>
            </div>

            <h2>Main Idea</h2>

            <p>
                Rainwater harvesting helps reduce dependence on other water
                sources and makes better use of rainfall.
            </p>
        `
    },


    filtration: {
        icon: "🧹",
        title: "Filtration",

        content: `
            <h2>Why is Filtration Needed?</h2>

            <p>
                Rainwater collected from rooftops can contain dust, leaves,
                dirt and other particles. Filtration helps remove many of
                these unwanted materials before the water is stored or used.
            </p>

            <h2>Common Filter Materials</h2>

            <ul>
                <li>Gravel</li>
                <li>Sand</li>
                <li>Mesh or screen</li>
                <li>Other suitable filter media</li>
            </ul>

            <h2>How Filtration Works</h2>

            <div class="step">
                <strong>Step 1</strong>
                <p>
                    Larger particles such as leaves and debris can be
                    stopped using a screen or mesh.
                </p>
            </div>

            <div class="step">
                <strong>Step 2</strong>
                <p>
                    Water passes through layers of filter material.
                </p>
            </div>

            <div class="step">
                <strong>Step 3</strong>
                <p>
                    Many suspended particles are trapped by the filter
                    layers.
                </p>
            </div>

            <p>
                Proper treatment is necessary if harvested rainwater is
                intended for drinking.
            </p>
        `
    },


    storage: {
        icon: "🛢️",
        title: "Water Storage",

        content: `
            <h2>What is Water Storage?</h2>

            <p>
                After collection and suitable filtration, rainwater can be
                stored in tanks or other appropriate storage structures.
            </p>

            <h2>Why Store Rainwater?</h2>

            <p>
                Rain does not fall evenly throughout the year. Storage allows
                collected water to be available when rainfall is not occurring.
            </p>

            <h2>Important Points</h2>

            <ul>
                <li>The storage container should be suitable for water storage.</li>
                <li>The tank should be kept covered.</li>
                <li>It should be protected from contamination.</li>
                <li>Regular cleaning and maintenance are important.</li>
            </ul>
        `
    },


    reuse: {
        icon: "🏠",
        title: "Water Reuse",

        content: `
            <h2>How Can Harvested Water Be Reused?</h2>

            <p>
                Depending on its quality and treatment, harvested rainwater
                can be used for several purposes.
            </p>

            <ul>
                <li>Gardening</li>
                <li>Plant irrigation</li>
                <li>Cleaning</li>
                <li>Toilet flushing</li>
                <li>Other suitable non-drinking uses</li>
            </ul>

            <h2>Why Reuse Water?</h2>

            <p>
                Reusing harvested water can reduce the demand on treated
                freshwater for tasks where drinking-quality water is not
                necessary.
            </p>

            <h2>Important</h2>

            <p>
                Water must receive appropriate treatment before it is used
                for drinking or other uses requiring potable water.
            </p>
        `
    },


    benefits: {
        icon: "🌱",
        title: "Benefits",

        content: `
            <h2>Major Benefits of Rainwater Harvesting</h2>

            <div class="step">
                <strong>💧 Water Conservation</strong>
                <p>
                    It allows rainfall to be captured and used instead of
                    letting all of it run away.
                </p>
            </div>

            <div class="step">
                <strong>🌱 Environmental Benefit</strong>
                <p>
                    It encourages responsible use of a natural resource.
                </p>
            </div>

            <div class="step">
                <strong>🏠 Useful at Home</strong>
                <p>
                    Properly designed systems can provide water for suitable
                    household and gardening activities.
                </p>
            </div>

            <div class="step">
                <strong>🌍 Sustainable Approach</strong>
                <p>
                    It is one method that can contribute to better water
                    management.
                </p>
            </div>
        `
    },


    science: {
        icon: "🔬",
        title: "Science Behind It",

        content: `
            <h2>The Science Behind Rainwater Harvesting</h2>

            <p>
                Rainwater harvesting works by using simple physical processes
                such as collection, gravity-driven flow, filtration and storage.
            </p>

            <h2>Gravity</h2>

            <p>
                Water naturally flows from a higher level to a lower level.
                This allows rooftop rainwater to move through gutters and pipes
                towards a filter or tank.
            </p>

            <h2>Filtration</h2>

            <p>
                Filtration uses physical barriers and filter media to remove
                many suspended particles from water.
            </p>

            <h2>Water Cycle Connection</h2>

            <p>
                Rainwater harvesting is connected with the natural water cycle.
                Rainfall provides water that can be captured before it becomes
                surface runoff.
            </p>

            <h2>Scientific Principle</h2>

            <div class="step">
                <strong>Rain → Collection → Filtration → Storage → Reuse</strong>
                <p>
                    This simple chain represents the basic working principle
                    of a rainwater harvesting system.
                </p>
            </div>
        `
    }

};


/* ================= OPEN TOPIC ================= */

function openTopic(topicName) {

    const topic = topics[topicName];

    if (!topic) {
        return;
    }

    const detailContent = document.getElementById("detailContent");

    detailContent.innerHTML = `
        <div class="detail-icon">${topic.icon}</div>

        <h1>${topic.title}</h1>

        ${topic.content}
    `;

    document.getElementById("introPage").classList.add("hidden");
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("detailPage").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}