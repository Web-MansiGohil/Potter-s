async function books() {
    try {
        let response = await axios.get("https://api.potterdb.com/v1/books/90321aa7-4102-456d-8f7d-7c4a970e25bd");
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
            <div class=box2 style="height:190vh;">
                <h2 style="text-align:left;margin-left:25px;padding-left:5px;color:white;"> Chapters </h2>
                    <div class=chapters>
                        <ul>
                            <li>1. The Dark Lord Ascending</li>
                            <li>2. In Memoriam</li>
                            <li>3. The Dursleys Departing</li>
                            <li>4. The Seven Potters</li>
                            <li>5. Fallen Warrior</li>
                            <li>6. The Ghoul in Pyjamas</li>
                            <li>7. The Will of Albus Dumbledore</li>
                            <li>8. The Wedding</li>
                            <li>9. A Place to Hide</li>
                            <li>10. Kreacher's Tale</li>
                            <li>11. The Bribe</li>
                            <li>12. Magic is Might</li>
                            <li>13. The Muggle-Born Registration Commission</li>
                            <li>14. The Thief</li>
                            <li>15. The Goblin's Revenge</li>
                            <li>16. Godric's Hollow</li>
                            <li>17. Bathilda's Secret</li>
                            <li>18. The Life and Lies of Albus Dumbledore</li>
                            <li>19. The Silver Doe</li>
                            <li>20. Xenophilius Lovegood</li>
                            <li>21. The Tale of the Three Brothers</li>
                            <li>22. The Deathly Hallows</li>
                            <li>23. Malfoy Manor</li>
                            <li>24. The Wandmaker</li>
                            <li>25. Shell Cottage</li>
                            <li>26. Gringotts</li>
                            <li>27. The Final Hiding Place</li>
                            <li>28. The Missing Mirror</li>
                            <li>29. The Lost Diadem</li>
                            <li>30. The Sacking of Severus Snape</li>
                            <li>31. The Battle of Hogwarts</li>
                            <li>32. The Elder Wand</li>
                            <li>33. The Prince's Tale</li>
                            <li>34. The Forest Again</li>
                            <li>35. King's Cross</li>
                            <li>36. The Flaw in the Plan</li>
                            <li>37. Nineteen Years Later</li>
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