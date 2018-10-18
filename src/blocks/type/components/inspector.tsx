/**
 * Inspector Controls
 */
import * as React from 'react';
import { CirclePicker } from 'react-color';
import {GutenbergBlockProps} from "../../../@types/global";
import MarginPicker from "../../../lib/inspector/marginPicker";

// Setup the block
const {__} = wp.i18n;

// Import block components
const {
    Button,
    ButtonGroup,
    PanelBody,
    PanelRow,
} = wp.components;
const {
    InspectorControls,
} = wp.editor;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends React.Component<GutenbergBlockProps, {}> {


    render() {
        const {attributes: {margin, type}, setAttributes} = this.props;

        return (
			<InspectorControls key="inspector">
                <PanelBody title={__('Size')}>
                    <PanelRow>
                        <ButtonGroup>
                            <Button isLarge isPrimary={type === 'display-1'} onClick={() => {
                                setAttributes({type: 'display-1'})
                            }}>
                                Display 1
                            </Button>
                            <Button isLarge isPrimary={type === 'display-2'} onClick={() => {
                                setAttributes({type: 'display-2'})
                            }}>
                                Display 2
                            </Button>
                            <Button isLarge isPrimary={type === 'display-3'} onClick={() => {
                                setAttributes({type: 'display-3'})
                            }}>
                                Display 3
                            </Button>
                            <Button isLarge isPrimary={type === 'display-4'} onClick={() => {
                                setAttributes({type: 'display-4'})
                            }}>
                                Display 4
                            </Button>
                            <Button isLarge isPrimary={type === 'lead'} onClick={() => {
                                setAttributes({type: 'lead'})
                            }}>
                                Lead
                            </Button>
                        </ButtonGroup>
                    </PanelRow>
                    <MarginPicker margin={margin} setAttributes={setAttributes}/>
                </PanelBody>

			</InspectorControls>
        );
    }
}
