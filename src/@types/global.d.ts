// Type definitions for [Gutenberg Blocks] [1.0.0]
// Project: [Gutenberg Blocks]
// Definitions by: [Sebastian Buckpesch] <[https://www.gutenberg-unlimited.org]>

import {Component, ReactNode} from 'react';

interface GutenbergBlockProps {
    attributes: { [key: string]: any }
    className: string
    clientId: string
    isSelected: true
    isSelectionEnabled: true
    name: string

    insertBlocksAfter(): void

    mergeBlocks(): void

    onReplace(): void

    setAttributes(props: {}): void

    toggleSelection(): void
}

interface GutenbergBlock {
    title: string
    description?: string
    icon?: string | ReactNode | {}
    category: string
    keywords?: string[]
    attributes?: {}
    deprecated?: {
        attributes: {} // @see https://wordpress.org/gutenberg/handbook/block-api/attributes/
        support?: {} // @see https://wordpress.org/gutenberg/handbook/block-api/
        save(props: GutenbergBlockProps): ReactNode
        migrate?(attributes: any, innerBlocks: any): {} | any[]
        isEligible?(attributes: any, innerBlocks?: any): any
    }[]

    edit(props: GutenbergBlockProps): ReactNode

    save(props: GutenbergBlockProps): ReactNode

}

declare global {
    const wp: {
        // @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n
        i18n: {
            __(text: string, domain?: string): string
            _x(text: string, context: string, domain?: string): string
            _n(single: string, plural: string, number: number, domain?: string): string
            _nx(single: string, plural: string, number: number, context: string, domain?: string): string
            sprintf(format: string, ...args: any[]): string
            setLocaleData(data: {}, domain: string)
        }
        // @see https://github.com/WordPress/gutenberg/tree/master/packages/components/src
        components: {
            Panel(): Component<{
                className?: string
                header?: string
            }>
            PanelBody(): Component<{
                title?: string
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
            // @see tutorial @ https://raquelmsmith.com/blog/how-to-create-nested-blocks-for-gutenberg
            InnerBlocks: {
                Content(): Component<{
                    className?: string
                    format?: string
                    tagName?: string
                    value?: any[] | string
                }>
                (): Component<any>
            }
            InspectorAdvancedControls(): Component<any>
            InspectorControls(): Component<any>
            PanelColor(): Component<any>
            PanelColorSettings(): Component<any>
            PlainText: {
                Content(): Component<{
                    className?: string
                    format?: string
                    value: any[] | string
                }>
                (): Component<{
                    autoFocus?: boolean
                    autocompleters?: any[]
                    className?: string
                    format?: string
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
                    onSplit?(before: any[] | string, after: any[] | string, blocks: any): any
                }>
            }
            RichText: {
                Content(): Component<{
                    className?: string
                    format?: string
                    tagName?: string
                    value: any[] | string
                }>
                (): Component<{
                    autoFocus?: boolean
                    autocompleters?: any[]
                    className?: string
                    format?: string
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
                    onSplit?(before: any[] | string, after: any[] | string, blocks: any): any
                }>
            }
            ServerSideRender(): Component<any>
            MediaPlaceholder(): Component<any>
            MediaUpload(): Component<any>
            URLInput(): Component<any>
            URLInputButton(): Component<any>
        }
        element: {
            Children: any
            Component: any
            Fragment: any
            RawHTML: any
            StrictMode: any
            cloneElement: any
            concatChildren: any
            createContext: any
            createElement: any
            createPortal: any
            createRef: any
            findDOMNode: any
            forwardRef: any
            isEmptyElement: any
            isValidElement: any
            render: any
            renderToString: any
            switchChildrenNodeName: any
            unmountComponentAtNode: any
        }
        blocks: {
            children: {[key:string]:any}
            cloneBlock(e): void
            createBlock(name: string, typeDefinition: any): void;
            doBlocksMatchTemplate(): void
            findTransform(e, t): void
            getBlockAttributes(e,t,r):  void
            getBlockContent(e):  void
            getBlockDefaultClassName(e):  void
            getBlockMenuDefaultClassName(e):  void
            getBlockSupport(e,t,r):  void
            getBlockTransforms(e,t):  void
            getBlockType(name: string): any
            getBlockTypes():  void
            getCategories():  void
            getChildBlockNames(e): void
            getControlSettings(name: string): any
            getDefaultBlockName():  void
            getPhrasingContentSchema():  void
            getPossibleBlockTransformations(e):  void
            getSaveContent(e,t,r):  void
            getSaveElement(e,t):  void
            getUnknownTypeHandlerName():  void
            hasBlockSupport(e,t,r):  void
            hasChildBlocks(e): void
            hasChildBlocksWithInserterSupport(e): void
            isReusableBlock(e):  void
            isUnmodifiedDefaultBlock(e):  void
            isValidBlock(e,t,r):  void
            isValidIcon(e):  void
            node: {[key:string]:any}
            normalizeIconObject(e):  void
            parse(t): void
            parseWithAttributeSchema(e,t):  void
            rawHandler(e):  void
            registerBlockStyle(e,t): void
            registerBlockType(name: string, typeDefinition: GutenbergBlock): void;
            serialize(e):  void
            setCategories(e):  void
            setDefaultBlockName(e):  void
            setUnknownTypeHandlerName(e):  void
            switchToBlockType(e,t):  void
            synchronizeBlocksWithTemplate():  void
            unregisterBlockType(e):  void
            withBlockContentContext(n): void
        }
    };
}
