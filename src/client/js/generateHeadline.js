function generateHeadline() {
    event.preventDefault()
    console.log("::: generating headlines :::");
    let headlines = [
        "Twitter hides 'abusive' Trump tweet targeting protesters",
        "FBI finds black driver Bubba Wallace not targeted by hate crime in 'noose' incident: NASCAR",
        "China reports 12 new coronavirus cases on the mainland",
        "Asian stocks under pressure after spike in coronavirus cases",
        "Jimmy Kimmel apologizes for ‘embarrassing’ sketches as Hollywood reckons with its use of blackface",
        "Who Can We Trust With the Nuclear Button? No One",
        "Is It Finally Hammer Time for Apple and Its App Store?",
        "What if the Supreme Court Rules on Abortion and the Country Shrugs?",
        "Why Is the G.O.P. Fighting to Preserve Monuments to Traitors in the Capitol?",
        "Chile celebrated success against the coronavirus — and began to open up. Infections have soared.",
        "The Climate Struggle Within the Civil Service",
        "Your Climate Disaster Tax Bill Is Growing",
        "Journalists believe news and opinion are separate, but readers can’t tell the difference",
        "Smart thinking needed as event caterers pick up the pieces",
        "Hiring a domestic helper in Singapore: how to interview and employ a maid",
        "In emerging Asia, independent grocery stores remain a vital channel for consumer-packaged-goods companies. ",
        "In stores or on the couch, Asia Pacific consumers shift rapidly to digital commerce and show no signs of turning back – Mastercard study",
        "The Shah Jahan Mosque – also known as the Jamia Masjid – is located in Thatta, a town in Pakistan’s Sindh province. It’s widely known for having the most elaborate display of tile work in all of South Asia",
        "Students for Trump co-founder pleads guilty to $46,000 fraud scheme",
        "BREAKING: At the Students For Trump rally in Phoenix, Arizona today Trump said of Democrats: 'While their movement is based on hate, ours is based on love.''",
        "Students for trump graduated from trump University and doused themselves in coronavirus with a mist spray fan beforehand so no worries folks",
        "FBI announces noose found in Bubba Wallace's garage had been there since 2019; no federal crime committed.",
        "Does anyone else feel like everything is opening wayyy too soon? Like we're still having 100+ deaths a day and yet Boris Johnson and his government don't seem to care because we're 'Winning the war against Covid-19' #lockdownuk",
        "If you're one of the people who are excited that pubs are reopening, you may need to sort your priorities out. ",
        "I don't care what anyone says especially the government but I am 100% staying at least 2m away from strangers for the foreseeable future.",
        "So we can have 2 households meet up as long as we social distancing,  but we can also go to the pub and meet up with 10+ households for drunken banter? Makes sense.",
        "Stop complaining, it's embarrassing. Just do what you want, go about your day, but for the sake of others, learn how to keep your distance."
    ]

    console.log("::: Replacing value :::");
    document.getElementById("name").value = headlines[Math.floor(Math.random() * headlines.length)];
}

export { generateHeadline }
