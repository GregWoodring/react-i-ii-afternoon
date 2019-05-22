import React, {Component} from 'react';
import Display from './Display';
import Buttons from './Buttons';
import data from '../data';
import Form from './Form'

export default class Body extends Component{
    constructor(props){
        super(props);

        this.state = {
            moviesArr: data,
            index: 0,
            currentObj: data[0],
            displayForm: false
        }
    }

    changeIndex = (inc) => {
        console.log(this.state.index)
        if(inc){
            if(this.state.index < this.state.moviesArr.length -1){
                this.setState({
                    index: this.state.index + 1,
                    currentObj: this.state.moviesArr[this.state.index + 1]
                })
            } else {
                this.setState({
                    index: 0,
                    currentObj: this.state.moviesArr[0]
                })
            }
        } else {
            if(this.state.index > 0){
                this.setState({
                    index: this.state.index - 1,
                    currentObj: this.state.moviesArr[this.state.index - 1]
                })
            } else {
                this.setState({
                    index: this.state.moviesArr.length -1,
                    currentObj: this.state.moviesArr[this.state.moviesArr.length -1]
                })
            }
        }
        console.log(this.state.index)
    }

    delete = () => {
        let moviesArr = this.state.moviesArr.slice();
        
        moviesArr.splice(this.state.index, 1);
        
        this.setState({moviesArr})
        

    }

    edit = () => {
        this.setState({
            displayForm: true
        })
    }
    new = () => {
        let moviesArr = [...this.state.moviesArr];
        moviesArr.push({
            favoriteMovies: [],
            name: {first: '', last: ''},
            city: '',
            country: '',
            job: '',
            employer: '',
            title: ''
        });
        this.setState({
            moviesArr,
            index: this.state.moviesArr.length,
            displayForm: true
        })
    }

    changeValues = (e, value) => {
        let newObj = {...this.state.currentObj}
        newObj[value] = e.target.value
        console.log(newObj[value])
        this.setState({
             currentObj: newObj
        })
    }

    submit = (obj) => {
        let moviesArr = this.state.moviesArr.slice();
        moviesArr.splice(this.state.index, 1, obj)
        this.setState({
            moviesArr,
            currentObj: obj,
            displayForm: false
        })
    }

    render(){
        let item = this.state.moviesArr[this.state.index]

        return(
            this.state.displayForm ?
            <div className="body">
                <Form 
                    obj={item}
                    submit={this.submit}
                />
            </div>
            :
            <div className="body">
                <Display 
                    movielist={item.favoriteMovies}
                    name={`${item.name.first} ${item.name.last}`}
                    index={this.state.index + 1}
                    length={this.state.moviesArr.length}
                    from={`${item.city}, ${item.country}`}
                    job={item.title}
                    employer={item.employer}
                /> 
                <Buttons 
                    changeIndex={this.changeIndex}
                    delete={this.delete}
                    edit={this.edit}
                    new={this.new}
                />
            </div>
        )
    }
}
