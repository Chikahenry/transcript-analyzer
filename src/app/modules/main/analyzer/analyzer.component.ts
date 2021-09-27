import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import AgentFacade from 'src/app/core/facades/agent.facade';
import CallFacade from 'src/app/core/facades/call.facade';
import Channel from 'src/app/core/models/channel.model';
import Transcript from 'src/app/core/models/transcript.model';
import TemplateService from 'src/app/core/services/template.service';
import Script from 'src/app/core/models/script.model';

@Component({
    selector: 'app-analyzer',
    templateUrl: './analyzer.component.html',
    styleUrls: ['./analyzer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AnalyzerComponent implements OnInit, AfterViewInit {
    public agentControl: FormControl;
    public callControl: FormControl;
    public currentOrderHover: number | null = null;
    public dataSource: any[] = [];
    public dataSourceRep: any[] = [];
    public matchingPercentageControl: FormControl;

    private defaultSensitivity = 38;
    private lastName: string | null = null;
    @ViewChild('subHeader')
    private subHeader?: TemplateRef<any>;

    constructor(
        public agents: AgentFacade,
        public calls: CallFacade,
        private _tplService: TemplateService,
        private _router: Router
    ) {
        this.agentControl = new FormControl();
        this.callControl = new FormControl();
        this.matchingPercentageControl = new FormControl();

        this.agentControl.valueChanges.subscribe({
            next: (agent) => this.selectAgent(agent)
        });
        this.callControl.valueChanges.subscribe({
            next: (call) => this.selectCall(call)
        });
        this.matchingPercentageControl.valueChanges.subscribe({
            next: (matchingPercentage) => this.calls.setMatchingPercentage(matchingPercentage)
        });

        this.matchingPercentageControl.setValue(this.defaultSensitivity);
    }

    public getPercentageCovered (scripts: Script[]): string {
        let covered = scripts.filter(script => script.similarity && script.similarity > 0).length;
        return `${((covered / scripts.length) * 100).toFixed(0)}%`;
    }

    public getSpeaker (call: Transcript, channel: number): string | null {
        const name = call.getSpeakerFirstName(channel);
        if (this.lastName != name) {
            this.lastName = name;
            return name;
        }

        return null;
    }

    public getTooltip (transcript: any, scripts: Script[]): any {
        let tooltip = '';
        let order = null;
        const matchingScript = scripts.findIndex((script) => script.sentence === transcript.matching_sentence);
        if (matchingScript !== -1) {
            tooltip = `${transcript.similarity * 100}% matching with line ${scripts[matchingScript].order + 1} "${scripts[matchingScript].sentence}"`;
            order = scripts[matchingScript].order;
        }

        return {
            tooltip,
            order
        };
    }

    public ngAfterViewInit(): void {
        this._tplService.register('subHeader', this.subHeader);
    }

    public ngOnInit(): void {
        this.dataSource = MOCK_DATA();
        this.dataSourceRep = MOCK_DATA().slice(-25);
    }

    public secondsToTime (value: any): string {
        const minutes = Math.floor(value % 3600 / 60).toString().padStart(2,'0');
        const seconds = Math.floor(value % 60).toString().padStart(2,'0');
        
        return `${minutes}:${seconds}`;
    }

    public selectAgent(agentId: any): void {
        this.agents.setActiveAgent(agentId);
    };

    public selectCall(callId: any): void {
        this.calls.selectCall(callId);
    }
}

const MOCK_DATA = () => {
    const DATA: any[] = [];
    const SPEAKERS: string[] = [
        'Harvey',
        'Luke'
    ];

    let currentTime = 30;

    for (let i = 0; i < 100; i++) {
        const min = Math.floor(currentTime / 60);
        const sec = Math.floor(currentTime - min * 60);

        DATA.push({
            time: `${('0' + min).slice(-2)}:${('0' + sec).slice(-2)}`,
            speaker: SPEAKERS[Math.floor(Math.random() * ( SPEAKERS.length ))],
            sentence: `This is a sample sentence #${i + 1}`
        });

        currentTime += (Math.random() * 10) + 5;
    }

    return DATA;
};
