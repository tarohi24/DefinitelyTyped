import BaseComponent, { GetInstanceFactory } from './base-component';

declare class Modal extends BaseComponent {
    constructor(element: string | Element, options?: Partial<Modal.Options>);

    /**
     * Manually toggles a modal. Returns to the caller before the modal has
     * actually been shown or hidden (i.e. before the shown.bs.modal or
     * hidden.bs.modal event occurs).
     */
    toggle(): void;

    /**
     * Manually opens a modal. Returns to the caller before the modal has
     * actually been shown (i.e. before the shown.bs.modal event occurs).
     */
    show(): void;

    /**
     * Manually hides a modal. Returns to the caller before the modal has
     * actually been hidden (i.e. before the hidden.bs.modal event occurs).
     */
    hide(): void;

    /**
     * Manually readjust the modal’s position if the height of a modal
     * changes while it is open (i.e. in case a scrollbar appears).
     */
    handleUpdate(): void;

    static getInstance: GetInstanceFactory<Modal>;

    static jQueryInterface: Modal.jQueryInterface;

    /**
     * Default settings of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#default-settings
     */
    static Default: Modal.Options;
}

declare namespace Modal {
    enum Events {
        /**
         * This event fires immediately when the show instance method is called.
         * If caused by a click, the clicked element is available as the
         * relatedTarget property of the event.
         */
        show = 'show.bs.modal',

        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete). If caused by a click,
         * the clicked element is available as the relatedTarget property of
         * the event.
         */
        shown = 'shown.bs.modal',

        /**
         * This event is fired immediately when the hide instance method has
         * been called.
         */
        hide = 'hide.bs.modal',

        /**
         * This event is fired when the modal has finished being hidden from the
         * user (will wait for CSS transitions to complete).
         */
        hidden = 'hidden.bs.modal',

        /**
         * This event is fired when the modal is shown, its backdrop is static
         * and a click outside the modal or an escape key press is performed
         * with the keyboard option or data-keyboard set to false.
         */
        hidePrevented = 'hidePrevented.bs.modal',
    }

    interface Options {
        /**
         * Includes a modal-backdrop element. Alternatively, specify static for
         * a backdrop which doesn't close the modal on click.
         *
         * @default true
         */
        backdrop: 'static' | boolean;

        /**
         * Closes the modal when escape key is pressed
         *
         * @default true
         */
        keyboard: boolean;

        /**
         * Puts the focus on the modal when initialized.
         *
         * @default true
         */
        focus: boolean;
    }

    type jQueryInterface = (
        config?: Partial<Options> | 'toggle' | 'show' | 'hide' | 'handleUpdate' | 'dispose',
    ) => void;
}

export default Modal;
