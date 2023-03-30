(function() {

    async function bookTable() {
        const date = document.querySelector('#date').value;
        const time = document.querySelector('#time').value;
        const guest = document.querySelector('#guest').value;
        const name = document.querySelector('#name').value;
        const phone = document.querySelector('#phone').value;

        const data = {
            date,
            time,
            guest,
            name,
            phone
        };

        try{
            const response = await fetch('/booktable', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if(response.ok) {
                console.log(result.message);
            } else {
                console.log(result.err);
            }
        } catch (err) {
            console.log(err);
        }
    }

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        bookTable();
    });
})()