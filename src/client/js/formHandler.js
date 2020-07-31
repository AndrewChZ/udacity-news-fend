// 2nd handleSubmit function

function handleSubmit(event) {
    event.preventDefault()

    let content = document.getElementById("name").value;
    let inputField = document.querySelector("#name");

    if (content.length > 0) {
        console.log(`------------------------------------------------------------`)
        console.log(`The string that we are going to be checking is: ${content}`);

        async function getResults(content) {
            try {
                const settings = {
                    method: 'POST', 
                    credentials: 'same-origin',
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },    
                body: JSON.stringify({ text: content }), 
                }; 
            const res = await fetch("http://localhost:8000/api/", settings);
            return res;
            } catch (error) {
                console.log("An error has occured", error);
            }
        }
        getResults(content)
            .then((res) => res.json())
            .then((data) => {

            let fragment = document.createDocumentFragment();
            fragment = `
                        <div id="divider"></div>
                            <h1>Results</h1>
                            <div id="results">
                            <div id="your-text">
                                <h3>Your text</h3>
                                <p>${content}</p>
                            </div>
                            <div id="polarity">
                                <h3>Polarity</h3>
                                <p id="polarity-data">${data.polarity}</p> 
                                <p class="subtitle" id="polarity-confidence-data">(${data.polarity_confidence.toFixed(2)}% confidence)</p>
                            </div>
                            <div id="subjectivity">
                                <h3>Subjectivity</h3>
                                <p id="polarity-data">${data.subjectivity}</p> 
                                <p class="subtitle" id="polarity-confidence-data">(${data.subjectivity_confidence.toFixed(2)}% confidence)</p>
                            </div>
                        </div>
                        `
            document.getElementById('results-group').innerHTML = fragment;
            
            inputField.classList.remove('invalidInput')

            // Logging results to console
            console.log(data);
            console.log(`Polarity: ${data.polarity} (${data.polarity_confidence.toFixed(2)}% confident)`);
            console.log(`Subjectivity: ${data.subjectivity} (${data.subjectivity_confidence.toFixed(2)}% confidence)`);
            console.log(`------------------------------------------------------------`)
        });
    } else {
        console.log("text is not valid!");
        inputField.style.border = "1px solid #D01212";
        inputField.classList.add('invalidInput')
        let validationText = document.querySelector("#validation-message");
        validationText.innerHTML = "Please enter a valid piece of content";
    }
}

export { handleSubmit }