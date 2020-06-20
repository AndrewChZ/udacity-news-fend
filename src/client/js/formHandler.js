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
        //Grab HTML Elements to be updated
        console.log(data);
        console.log(`Polarity: ${data.polarity} (${data.polarity_confidence.toFixed(2)}% confident)`);
        console.log(`Subjectivity: ${data.subjectivity} (${data.subjectivity_confidence.toFixed(2)}% confidence)`);
        console.log(`------------------------------------------------------------`)
    });
    
}

export { handleSubmit }
