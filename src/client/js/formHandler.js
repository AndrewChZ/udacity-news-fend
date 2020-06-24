// 2nd handleSubmit function

function handleSubmit(event) {
    event.preventDefault()

    let content = document.getElementById("name").value;
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
        const res = await fetch("http://localhost:8080/api/", settings);
        return res;
        } catch (error) {
            console.log("An error has occured", error);
        }
    }
    getResults(content)
        .then((res) => res.json())
        .then((data) => {

        // Updated HTML fragment with results ORIGINAL
        // let fragment = document.createDocumentFragment();
        // fragment = `<strong>Form Results:</strong>
        //             <div id="results">
        //                 <p><b>Text tested: ${content}</b></p><br>
                    
        //                 <p>Polarity: ${data.polarity}<br>
        //                 (${data.polarity_confidence.toFixed(2)}% confidence)</p>
        //                 <br>
        //                 <p>Subjectivity: ${data.subjectivity}<br>
        //                 (${data.subjectivity_confidence.toFixed(2)}% confidence)</p>
        //             </div>
        //             `
        // document.getElementById('results_insert').innerHTML = fragment;

        // Updated HTML fragment with results UPDATED
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
        
        // Logging results to console
        console.log(data);
        console.log(`Polarity: ${data.polarity} (${data.polarity_confidence.toFixed(2)}% confident)`);
        console.log(`Subjectivity: ${data.subjectivity} (${data.subjectivity_confidence.toFixed(2)}% confidence)`);
        console.log(`------------------------------------------------------------`)
    });
    
}

export { handleSubmit }