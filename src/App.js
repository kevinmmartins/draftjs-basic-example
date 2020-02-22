import React from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            draftEditorState: EditorState.createEmpty(),
        }
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.draftEditorState, command);
        if (newState) {
            this.onChange(newState);
        }
    }

    onChange = (draftEditorState) => {
        this.setState({
            draftEditorState
        })
    }

    render() {
        return (
            <div className="App">
                <div className="draftEditors">
                    <Editor
                        editorState={this.state.draftEditorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default App
