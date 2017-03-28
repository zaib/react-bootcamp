import React,{Component} from 'react';
import AddInline from '../shared/add-inline';
import CategoryListItem from './category.list.item';

// import $ from 'jquery'

class CategoryList extends Component  {
    
    showSubCategories(evt){
        console.log(evt);
        // $('.collapse').collapse()
    }
    
    render() {
        return (
            <div className="">
                
                <AddInline placeholder="Add New Category"/>
                
                <div className="top-buffer-20 category-list list-group">   
                    <CategoryListItem />         
                    <CategoryListItem />         
                    <CategoryListItem />         
                </div>

            </div>

        )
    }
}

export default CategoryList;