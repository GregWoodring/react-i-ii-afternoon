import React, { Component } from 'react';


export default class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            favoriteMovies: [],
            name: {first: '', last: ''},
            city: '',
            country: '',
            job: '',
            employer: '',
            title: ''
        }
    }

    componentWillMount(){
        let {favoriteMovies,
            name,
            city,
            country,
            job,
            employer,
            title} = this.props.obj
        this.setState({favoriteMovies,
            name,
            city,
            country,
            job,
            employer,
            title})
    }

    renderMovies(){
        return this.state.favoriteMovies.map((item, index) => {
            return(
                <div>
                    <input 
                        onChange={e => {
                            let favoriteMovies = [...this.state.favoriteMovies]
                            favoriteMovies.splice(index, 1, e.target.value);
                            this.setState({
                                favoriteMovies
                            })
                        }}
                        placeholder="Movie"
                        type="text"
                        value={item}
                        key={index} />
                </div>
            )
        })
    }

    addMovie = () => {
        let favoriteMovies = [...this.state.favoriteMovies];
        favoriteMovies.push('')
        this.setState({
            favoriteMovies
        })
    }

    render(){
    return (
            <div className="display">
                <div>
                    <label>First Name </label>
                    <input 
                        onChange={e => {
                            this.setState({
                                name:{first:e.target.value, 
                                    last: this.state.name.last}
                                })
                            }}
                        placeholder="First Name" 
                        type="text" 
                        value={this.state.name.first}/>
                </div>
                <div>
                    <label>Last Name </label>
                    <input 
                        onChange={e => {
                            this.setState({
                                name:{first:this.state.name.first, 
                                    last:e.target.value}
                                })
                            }}
                        placeholder="Last Name" 
                        type="text" 
                        value={this.state.name.last}/>
                </div>
                <div>
                <label>City </label>
                <input
                    onChange={e => {
                        this.setState({
                            city: e.target.value
                        })
                    }}
                    placeholder="city"
                    type="text"
                    value={this.state.city} />
                </div>
                <div>
                <label>Country</label>
                <input
                    onChange={e => {
                        this.setState({
                            country: e.target.value
                        })
                    }}
                    placeholder="country"
                    type="text"
                    value={this.state.country} />
                </div>
                <div>
                    <label>Title</label>
                    <input 
                        onChange={e => {
                            this.setState({
                                title: e.target.value
                            })
                        }}
                        placeholder="Job Title" 
                        type="text" 
                        value={this.state.title}/>
                </div>
                <div>
                    <label>Employer</label>
                    <input 
                        onChange={e => {
                            this.setState({
                                employer: e.target.value
                            })
                        }}
                        placeholder="Employer" 
                        type="text" 
                        value={this.state.employer}/>
                </div>

                <h4>Favorite Movies</h4>
                {this.renderMovies()}
                <button
                    onClick={this.addMovie}
                >Add Movie</button>

                <button
                    onClick={() => this.props.submit(this.state)}
                >Submit</button>
            </div>
        )
    }
    
}

