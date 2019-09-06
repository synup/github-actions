"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const core = require('@actions/core');
const github = require('@actions/github');

function getCoverage(line) {
    var contents = line.trim().split('|')
    var component = content[1].trim()
    var coverage = content[2].trim().split('%')[0].split('`')[1]
    return { component: component, coverage: coverage }
}

function getComponentsCoverage(comment) {
    var bodyLines = commentBody.split('\n')
    var componentLines = []
    var coverage
    bodyLines.forEach(function(line) {
        if(line.match(/interactions|locations|insights|posts|v2app|rankings|client|scantool|reviewfunnel|notifications/)) {
            const { component, coverage } = getCoverage(line)
            console.log(component, coverage)
        }
    })
}

function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const context = github.context;
            console.log(JSON.stringify(context.payload))
            var commentBody = context.payload.comment.body
            console.log(commentBody.comment)
            getComponentsCoverage(commentBody)
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
