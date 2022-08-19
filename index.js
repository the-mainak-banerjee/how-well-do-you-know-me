const readlineSync = require("readline-sync")
const chalk = require("chalk")

const log = console.log
const playerName = readlineSync.question('What Is Your Name?\n=> ')

log('\nWelcome ' + playerName + ' to the ' + chalk.bold('How Do You Know Mainak Quiz.\n'))

log(`Let's see how much do you know about Mainak.\n`)

let score = 0;
const highestScore = [
  {
    name: 'Mainak',
    score: 6
  },
  {
    name: 'Suman',
    score: 4
  }
]

const question = [
  {
    que: "What's my full name?: ",
    ans: "Mainak Banerjee"
  },

  {
    que: "When is my Birthday?: ",
    ans: "21st February"
  },

  {
    que: "Where Do I Live?: ",
    ans: "Kolkata"
  },

  {
    que: "Who Is My favourite actor?: ",
    ans: "SRK"
  },

  {
    que: "What I am currently learning?: ",
    ans: "Coding"
  },

  {
    que: "What is my favourite film?: ",
    ans: "Tamasha"
  },

]

const play = ((currentQues, index) => {
  const playerAns = readlineSync.question(`q${index + 1}: ${currentQues.que}\n=> `)
  if (currentQues.ans.toLowerCase() === playerAns.toLowerCase()) {
    score = score + 2;
    log(chalk.green.bold(`\nYou are right ${playerName}\n`))
    log(`Your Current Score Is => ${score}`)
    log('----------------------------------')
  } else {
    log(chalk.red(`\nYou are wrong ${playerName}!\n`))
    log(`Your Current Score Is => ${score}`)
    log('----------------------------------')
  }
})

question.map(play)

log(chalk.bgBlue.black('\nYour Final Score is ' + score))

if (score === question.length * 2) {
  log('Yayyy you score full marks.')
}

log('\n----------------------------------')
log('Here is the leaderboard:', highestScore)

log("\n---------------------")
log("Screenshot me your score to take your position on the Leaderboard\n")

log('----------------------------------')
log('Share this challenge with your friends who knows about Mainak')