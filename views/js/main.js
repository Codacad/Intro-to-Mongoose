document.addEventListener('DOMContentLoaded', () => {
    const postReview = document.querySelector('input.post-review');
    postReview.addEventListener('click', (e) => {
        e.cancelable()
        e.preventDefault()        
    })
})