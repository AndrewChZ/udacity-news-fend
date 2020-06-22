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

        // Updated HTML fragment with results
        let fragment = document.createDocumentFragment();
        fragment = `<strong>Form Results:</strong>
                    <div id="results">
                        <p><b>Text tested: ${content}</b></p><br>
                    
                        <p>Polarity: ${data.polarity}<br>
                        (${data.polarity_confidence.toFixed(2)}% confidence)</p>
                        <br>
                        <p>Subjectivity: ${data.subjectivity}<br>
                        (${data.subjectivity_confidence.toFixed(2)}% confidence)</p>
                    </div>
                    `
        document.getElementById('results_insert').innerHTML = fragment;

        // Logging results to console
        console.log(data);
        console.log(`Polarity: ${data.polarity} (${data.polarity_confidence.toFixed(2)}% confident)`);
        console.log(`Subjectivity: ${data.subjectivity} (${data.subjectivity_confidence.toFixed(2)}% confidence)`);
        console.log(`------------------------------------------------------------`)
    });
    
}

export { handleSubmit }