// Type definitions for [Gutenberg Blocks] [1.0.0]
// Project: [Gutenberg Blocks]
// Definitions by: [Sebastian Buckpesch] <[https://www.gutenberg-unlimited.org]>

import {ReactNode} from 'react';

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
        components: any
        editor: any
        element: any
        blocks: {
            registerBlockType(name: string, typeDefinition: GutenbergBlock): void;
            createBlock(name: string, typeDefinition: any): void;
        }
    };
}
