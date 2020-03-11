import React from 'react'


// onChange = () => console.log("LO CAMBIARON")

const MapListItem = (props) => {


    return (

        <tr>
            <td>{props.item.created_at}</td>
            <td>{props.item.googleKWords}</td>
            <td>{props.item.demografic}</td>

            <td>
                <form>
                    <label>
                        <select>

                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                            <option value="6" >6</option>
                            <option value="7" >7</option>

                        </select>
                    </label>

                </form>



            </td>



        </tr>

    )
}

export default MapListItem