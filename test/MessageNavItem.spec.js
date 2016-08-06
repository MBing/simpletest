/**
 * Created by Martin on 03/08/16.
 */
import React from 'react';
import ReactTestUtils, { createRenderer, renderIntoDocument } from 'react-addons-test-utils';
import jsDom from 'mocha-jsdom';
import { should, beforeEach } from 'chai';
import MessageNavItem from '../src/components/MessageNavItem';

// describe.skip('MessageNavItem component', function() {
//     jsDom();
//     var result;
//     beforeEach(function (done) {
//         createRenderer().render(<MessageNavItem />);
//         result = createRenderer().getRenderOutput();
//         done();
//     });
//     it('Renders the message navigation item component', function() {
//         createRenderer().render(<MessageNavItem />);
//         var result = createRenderer().getRenderOutput();
//         result.type.should.equal(MessageNavItem);
//     });
//     it('Should have class list-item', function () {
//         // createRenderer().render(<MessageNavItem />);
//         // var result = createRenderer().getRenderOutput();
//         result.className.should.equal('list-item');
//     });
//     it('Should have a link element', function () {
//         // createRenderer().render(<MessageNavItem />);
//         // var result = createRenderer().getRenderOutput();
//         result.className.should.equal('list-item');
//     })
// });