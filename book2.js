async function books() {
    try {
        let response = await axios.get("https://api.potterdb.com/v1/books/a13adaa8-634f-4908-becc-28749ecbdaab");
        console.log(response);
        let book = `
            <h1>${response.data.data.attributes.title}</h1>
            <div class=book1>
                <div class=book_info1>
                    <img src="${response.data.data.attributes.cover}" alt="book1">
                        <div class="infoBook">
                            <table>
                                <tbody>
                                    <tr>
                                        <th> Title </th>
                                        <td>${response.data.data.attributes.title}</td>
                                    </tr>
                                    <tr>
                                        <th> Author </th>
                                        <td>${response.data.data.attributes.author}</td>
                                    </tr>
                                    <tr>
                                        <th>Release Date</th>
                                        <td>${response.data.data.attributes.release_date}</td>
                                    </tr>
                                    <tr>
                                        <th>Dedication</th>
                                        <td>${response.data.data.attributes.dedication}</td>
                                    </tr>
                                    <tr>
                                        <th>Summary </th>
                                        <td>${response.data.data.attributes.summary}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
            <div class=box2 style="height:100vh;">
                <h2 style="text-align:left;margin-left:25px;padding-left:5px;color:white;"> Chapters </h2>
                    <div class=chapters>
                        <ul>
                            <li>1. The Worst Birthday </li>
                            <li>2. Dobby's Warning </li>
                            <li>3. The Burrow </li>
                            <li>4. At Flourish and Blotts </li>
                            <li>5. The Whomping Willow </li>
                            <li>6. Gilderoy Lockhart </li>
                            <li> 7. Mudbloods And Murmurs</li>
                            <li> 8. The Deathday Party</li>
                            <li> 9. The Writing on the Wall</li>
                            <li>10. The Rogue Bludger </li>
                            <li>11. The Duelling Club </li>
                            <li> 12. The Polyjuice Potion</li>
                            <li>13.The Very Secret Diary </li>
                            <li>14.Cornelius Fudge </li>
                            <li>15.Aragog </li>
                            <li>16.The Chamber of Secrets </li>
                            <li>17.The Heir of Slytherin </li>
                            <li>18.Dobby's Reward </li>
                        <ul>

                    </div>
            <div>
        `;
        document.getElementById("main").innerHTML = book;

    } catch (error) {
        let er = document.getElementById("main");
        er.innerHTML = error;
        er.style.color = "white";
    }
}

books()