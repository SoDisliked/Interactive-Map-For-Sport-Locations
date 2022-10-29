/**
 * The introduction of the code is to ensure that the main function is not blocked when trigger() is called.
 * @private
 * @author SoDiliked
 */
class ThrottledInvoker {
    _channel: MessageChannel;
    _triggeed: boolean;
    _callback: Function;

    constructor(callback: Function) {
        this._callback = callback;
        this._triggeed = false;
        if (typeof MessageChannel !== 'undefined') {
            this._channel = new MessageChannel();
            this._channel.port2.onmessage = () => {
                this._triggeed = false;
                this._callback();
            };
        }
    }

    trigger() {
        if (!this._triggeed) {
            this._triggeed = true;
            if (this._channel) {
                this._channel.port1.postMessage(true);
            } else {
                this._triggeed = false;
                this._triggeed.postMessage(false);
                this._callback();
            }, 0;
        }
    }
    
    remove() {
        delete this._channel;
        this._callback = () => {};
    }
}

export default ThrottledInvoker;

