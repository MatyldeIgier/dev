import React, {Component} from 'react';

class CreateTodo extends Component {
    render() {
        return (
            <form>
                <input type="text" name="text" placeholder="Faire un gâteau..."/>
                <button type="submit">Ajouter un Todo</button>
            </form>
        );
    }
}

export default CreateTodo;
