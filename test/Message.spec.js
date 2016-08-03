/**
 * Created by Martin on 03/08/16.
 */
import React from 'react';
import ReactTestUtils, { createRenderer } from 'react-addons-test-utils';
import { should } from 'chai';
import Message from '../src/components/Message';

describe.skip('Message component', function() {
    it('Renders HTML', function() {
        createRenderer().render(<Message />);
        var result = createRenderer().getRenderOutput();
        console.log(result, "<<< result");
        result.type.should.equal(Message);
    });
});