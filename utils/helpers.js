

export function getInitialDecks () {
    const dataForNow = {
        TestDeck1: {
            title: 'TestDeck1',
            questions: [
                {
                question: 'Are we having fun yet?',
                answer: 'Always!'
                },
                {
                question: 'Can you see this question?',
                answer: 'Yes!'
                }
            ]
        },
        TestDeck2: {
            title: 'JavaScript',
            questions: [
                {
                question: 'What is more fun that coding?',
                answer: 'Nothing.'
                }
            ]
        }
    }

    return dataForNow;
}