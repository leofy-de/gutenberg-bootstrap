// Type definitions for [Gutenberg Blocks] [1.0.0]
// Project: [Gutenberg Blocks]
// Definitions by: [Sebastian Buckpesch] <[https://www.gutenberg-unlimited.org]>

import {Component, ReactNode} from 'react';

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
        editor: any
        element: any
        blocks: {
            registerBlockType(name: string, typeDefinition: GutenbergBlock): void;
            createBlock(name: string, typeDefinition: any): void;
        }
    };
}
