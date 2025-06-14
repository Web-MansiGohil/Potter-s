async function books() {
    try {
        let response = await axios.get("https://api.potterdb.com/v1/books/b0ae2226-4a78-4752-9961-d81627e84cd9");
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
            <div class=box2 style="height:160vh;">
                <h2 style="text-align:left;margin-left:25px;padding-left:5px;color:white;"> Chapters </h2>
                    <div class=chapters>
                        <ul>
                            <li>1. The Other Minister</li>
                            <li>2. Spinner's End</li>
                            <li>3. Will and Won't</li>
                            <li>4. Horace Slughorn</li>
                            <li>5. An Excess of Phlegm</li>
                            <li>6. Draco's Detour</li>
                            <li>7. The Slug Club</li>
                            <li>8. Snape Victorious</li>
                            <li>9. The Half-Blood Prince</li>
                            <li>10. The House of Gaunt</li>
                            <li>11. Hermione's Helping Hand</li>
                            <li>12. Silver and Opals</li>
                            <li>13. The Secret Riddle</li>
                            <li>14. Felix Felicis</li>
                            <li>15. The Unbreakable Vow
                            <li>16. A Very Frosty Christmas</li>
                            <li>17. A Sluggish Memory
                            <li>18. Birthday Surprises
                            <li>19. Elf Tails</li>
                            <li>20. Lord Voldemort's Request</li>
                            <li>21. The Unknowable Room</li>
                            <li>22. After the Burial</li>
                            <li>23. Horcruxes</li>
                            <li>24. Sectumsempra</li>
                            <li>25. The Seer Overheard</li>
                            <li>26. The Cave</li>
                            <li>27. The Lightning-Struck Tower</li>
                            <li>28. Flight of the Prince</li>
                            <li>29. The Phoenix Lament</li>
                            <li>30. The White Tomb</li>
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