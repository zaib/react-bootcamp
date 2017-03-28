import React from 'react';

const TaskForm = (props) => {
    return (
        <div className="top-buffer-20 edit-task">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="title" placeholder="Enter Task Title" />
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" /> Done
                    </label>
                </div>

                <div className="form-group">
                    <textarea className="form-control" placeholder="Details" rows="5"></textarea>
                </div>
                <div className="actions">
                    <button type="submit" className="btn btn-default">Submit</button>
                    <button type="button" className="btn btn-default left-buffer-10">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;