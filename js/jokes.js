// Event Listener for joke button
document.querySelector('.get-jokes').addEventListener('click',
    async e => {
        e.preventDefault();
        // Fetch method
        const url = `https://api.chucknorris.io/jokes/random`;
        let output = '';
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            output += `<p class="joke">${data.value}</p>`;
        } catch (err) {
            output += '<p class="joke">Something went wrong!</p>';
            console.log(err);
        }
        document.querySelector('.jokes').innerHTML = output;
        document.querySelector('.get-jokes').innerText = 'More';
    });