async function books() {
    try {
        let response = await axios.get("https://api.potterdb.com/v1/books/a8fdfea2-6fa4-40a5-929c-13d157c983ee");
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
                            <li>1. The Riddle House</li>
                            <li>2. The Scar</li>
                            <li>3. The Invitation</li>
                            <li>4. Back to The Burrow</li>
                            <li>5. Weasley's Wizard Wheezes</li>
                            <li>6. The Portkey</li>
                            <li>7. Bagman and Crouch</li>
                            <li>8. The Quidditch World Cup</li>
                            <li>9. The Dark Mark</li>
                            <li>10. Mayhem at the Ministry</li>
                            <li>11. Aboard the Hogwarts Express</li>
                            <li>12. The Triwizard Tournament</li>
                            <li>13. Mad-Eye Moody</li>
                            <li>14. The Unforgivable Curses</li>
                            <li>15. Beauxbatons and Durmstrang</li>
                            <li>16. The Goblet of Fire</li>
                            <li>17. The Four Champions</li>
                            <li>18. The Weighing of the Wands</li>
                            <li>19. The Hungarian Horntail</li>
                            <li>20. The First Task</li>
                            <li>21. The House-Elf Liberation Front</li>
                            <li>22. The Unexpected Task</li>
                            <li>23. The Yule Ball</li>
                            <li>24. Rita Skeeter's Scoop</li>
                            <li>25. The Egg and the Eye</li>
                            <li>26. The Second Task</li>
                            <li>27. Padfoot Returns</li>
                            <li>28. The Madness of Mr Crouch</li>
                            <li>29. The Dream</li>
                            <li>30. The Pensieve</li>
                            <li>31. The Third Task</li>
                            <li>32. Flesh, Blood and Bone</li>
                            <li>33. The Death Eaters
                            <li>34. Priori Incantatem</li>
                            <li>35. Veritaserum</li>
                            <li>36. The Parting of the Ways</li>
                            <li>37. The Beginning</li>
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