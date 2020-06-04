// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let info = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( (result) => {
        let arr =result.data.topics
        arr.forEach((topic) => {
            document.querySelector('div .topics').appendChild(createTopic(topic))
        })

        return arr
    })
    .catch((err) => {
        console.log(err)
    })

function createTopic(topic) {
    let div = document.createElement('div')
    div.classList.add('tab')
    div.textContent = topic

    return div
}
