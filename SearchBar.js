import React from 'react'

class SearchBar extends React.Component {

    state = {term: ''}

    onFormSubmit=(event)=>{
        //this will help to cancel the process of automatically submitting whn press enter key
        event.preventDefault()
        this.props.onSubmit(this.state.term)

        console.log(this.state.term)
    }


    render() {

        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            placeholder='Enter your Search Term'
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>

                </form>
            </div>
        )

    }
}

export default SearchBar