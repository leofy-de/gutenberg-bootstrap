// Type definitions for [Gutenberg Blocks] [1.0.0]
// Project: [Gutenberg Blocks]
// Definitions by: [Sebastian Buckpesch] <[https://www.gutenberg-unlimited.org]>

import {Component, ReactNode} from 'react';
import * as styles from "../assets/scss/styles.module.scss";
import * as React from "react";

interface GutenbergBlock {
    title: string
    description?: string
    icon?: string | ReactNode | {}
    category: string
    keywords?: string[]
    attributes?: {}
    deprecated?: {
        attributes: {}
        save(props: {
            setAttributes(props: {})
            isSelected: boolean
            attributes: any
            className: string
        }): ReactNode
        migrate(props: any, innerBlocks: any): {} | any[]
    }[]

    edit(props: {
        setAttributes(props: {})
        isSelected: boolean
        attributes: any
        className: string
    }): ReactNode

    save(props: {
        setAttributes(props: {})
        isSelected: boolean
        attributes: any
        className: string
    }): ReactNode

}

declare global {
    const wp: {
        i18n: any
        // @see https://github.com/WordPress/gutenberg/tree/master/packages/components/src
        components: {
            Panel(): Component<{
                className?: string
                header?: string
            }>
            PanelBody(): Component<{
                title?:string
                opened?: boolean
                className?: string
                icon?: string
                initialOpen?: boolean
                onToggle?(): any
            }>
            PanelHeader(): Component<{
                label?: string
            }>
            PanelRow(): Component<{
                className?: string
            }>
            CheckboxControl(): Component<any>
        }
        // @see https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components
        editor: {
            Autocomplete(): Component<any>
            AlignmentToolbar(): Component<any>
            BlockAlignmentToolbar(): Component<any>
            BlockControls(): Component<any>
            BlockEdit(): Component<any>
            BlockFormatControls(): Component<any>
            BlockIcon(): Component<any>
            ColorPalette(): Component<any>
            withColorContext(): Component<any>
            ContrastChecker(): Component<any>
            InnerBlocks: {
                Content():  Component<{
                    className?: string
                    format?:string
                    tagName?: string
                    value: any[] | string
                }>
                (): Component<any>
            }
            InspectorAdvancedControls(): Component<any>
            InspectorControls(): Component<any>
            PanelColor(): Component<any>
            PanelColorSettings(): Component<any>
            PlainText(): Component<any>
            RichText: {
                Content(): Component<{
                    className?: string
                    format?:string
                    tagName?: string
                    value: any[] | string
                }>
                ():  Component<{
                    autoFocus?: boolean
                    autocompleters?: any[]
                    className?: string
                    format?:string
                    formattingControls?: string[]
                    isSelected?: boolean
                    keepPlaceholderOnFocus?: boolean
                    multiline?: string
                    placeholder?: string
                    tagName?: string
                    value: any[] | string
                    onChange(value: any): any
                    onMerge?(forward: boolean): any
                    onRemove?(forward: boolean): any
                    onReplace?(blocks: any[]): any
                    onSplit?(before: any[]|string, after: any[]|string, blocks: any): any
                }>
            }
            ServerSideRender(): Component<any>
            MediaPlaceholder(): Component<any>
            MediaUpload(): Component<any>
            URLInput(): Component<any>
            URLInputButton(): Component<any>
        }
        element: any
        blocks: {
            registerBlockType(name: string, typeDefinition: GutenbergBlock): void;
            createBlock(name: string, typeDefinition: any): void;
        }
    };
}
