const data = [
    {
      "category": "Reaction",
      "score": 80,
      "box": "box-reaction",
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "box": "box-memory",
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "box": "box-verbal",
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "box": "box-visual",
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

  const summaryBox = document.querySelector('.summary-box')

window.addEventListener('DOMContentLoaded', () =>{ 
  let displaySummary = data.map( (item) =>{
        return `
        <div class="summary-box ${item.box}">
            <article class="summary-info">
              <img src="${item.icon}" alt="">
              <p>${item.category}</p>
            </article>
            <h5 class="summary-calc"><span>${item.score}</span> / 100</h5>
          </div>
        `
    })
    displaySummary = displaySummary.join("")
    console.log(displaySummary)

    summaryBox.innerHTML += displaySummary
})