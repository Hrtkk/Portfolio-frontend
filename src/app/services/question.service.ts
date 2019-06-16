import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../models/data';
import { QuestionBase } from '../models/data';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const questions: QuestionBase<any>[] = [
        new DropdownQuestion({
            key: 'Q1',
            label: 'Which of the following best describes your current stage of life?',
            options: [
                {
                    key:  'Single With future financial burdens.\
                            Ready to accumulate wealth for future short term and long term goal. ',
                    value: 5
                },
                {
                    key:  'A couple without children. Preparing for the future by establishing a home. Expecting to\
                            have or already have a high purchase rate of household and consumer items.',
                    value: 3
                },
                {
                    key:  'Young family with a home. You have a mortgage and childcare costs and maintain only\
                            small cash balances. ',
                    value: 1
                },
                {
                    key:  'Mature family. You are in your peak earning years and your mortgage is under control.\
                            You both work and you may or may not have children that are growing up or have left home.\
                            You’re ready to start thinking about your retirement years.  ',
                    value: 5
                },
                {
                    key:  'Preparing for retirement. You own your home and have few financial burdens; you want to\
                            ensure you can afford a comfortable retirement. ',
                    value: 3
                },
                {
                    key:  'Retired. You rely on existing funds and investments to maintain your lifestyle in retirement.\
                            You may already be receiving a Government pension and/or Superannuation pension. ',
                    value: 1
                },
            ],
            order: 1
        }),
        new DropdownQuestion({
            key: 'Q2',
            label: 'How familiar are you with investment matters?',
            options: [
                {
                    key:  'Not familiar at all with investments and feel uncomfortable with the complexity.',
                    value: 1
                },
                {
                    key:  'Not very familiar when it comes to investments.',
                    value: 2
                },
                {
                    key:  'Somewhat familiar. I don’t fully understand investments, including the sharemarket',
                    value: 3
                },
                {
                    key:  'Fairly familiar. I understand the various factors which influence investment performance',
                    value: 5
                },
                {
                    key:  'Very familiar. I use research and other investment information to make investment decisions.\
                            I understand the various factors which influence investment performance.',
                    value: 7
                },
            ],
            order: 2
        }),
        new DropdownQuestion({
            key: 'Q3',
            label: 'How long have you been investing, not counting your own home or bank type deposits?',
            options: [
                {
                    key:  '3 years or more',
                    value: 5
                },
                {
                    key:  'Up to 3 years',
                    value: 2
                },
                {
                    key:  'This is my/our first investment.',
                    value: 1
                },
            ],
            order: 3
        }),
        new DropdownQuestion({
            key: 'Q4',
            label: 'How long would you invest the majority of your money before you think you would need access to it?\
            (Assuming you already have plans in place to meet short term cashflow and/or emergencies.)',
            options: [
                {
                    key:  'In 2 years or less',
                    value: 1
                },
                {
                    key:  'Within 3 – 5 years',
                    value: 3
                },
                {
                    key:  'Within 6 – 10 years.',
                    value: 5
                },
                {
                    key:  'Not for 10 + years',
                    value: 7
                },
            ],
            order: 4
        }),
        new DropdownQuestion({
            key: 'Q5',
            label: 'In some instances, tax savings can be obtained from investments but this means taking on more risk. Which of\
            the following statements best describes your goal for investing?',
            options: [
                {
                    key:  'In some instances, tax savings can be obtained from investments but this means taking on more risk. Which of\
                        the following statements best describes your goal for investing?',
                    value: 1
                },
                {
                    key:  'Stable, reliable returns, minimal tax savings',
                    value: 3
                },
                {
                    key:  'Some variability in returns, some tax savings',
                    value: 5
                },
                {
                    key:  'Moderate variability in returns, reasonable tax savings.',
                    value: 7
                },
                {
                    key:  'Unstable but potentially higher returns, maximise tax savings',
                    value: 9
                },
            ],
            order: 5
        }),
        new DropdownQuestion({
            key: 'Q6',
            label: 'Assume you had an initial investment portfolio worth $100,000. If, due to market conditions, your portfolio fell to\
                    $85,000 within a short period, say a month, would you: (If your portfolio has experienced a drop like this, choose\
                    the answer that corresponds to your actual behaviour.)',
            options: [
                {
                    key:  'Sell all of the investments. You do not intend to take risks.',
                    value: 1
                },
                {
                    key:  'Sell a portion of your portfolio to cut your losses and reinvest into more secure investment sectors.',
                    value: 3
                },
                {
                    key:  'Hold the investment and sell nothing, expecting performance to improve.',
                    value: 5
                },
                {
                    key:  'Invest more funds to lower your average investment price',
                    value: 7
                },
            ],
            order: 6
        }),
        new DropdownQuestion({
            key: 'Q7',
            label: 'If the value of your investments fell to $60,000 over the next 12 months, would you: (If your portfolio has\
                experienced a drop like this, choose the answer that corresponds to your actual behaviour.)',
            options: [
                {
                    key:  'Sell all of the remaining investment.',
                    value: 1
                },
                {
                    key:  'Sell a portion of the remaining investment.',
                    value: 3
                },
                {
                    key:  'Hold your investments and sell nothing, expecting conditions to improve.',
                    value: 5
                },
                {
                    key:  'Invest more funds. You can tolerate short term losses in expectation of future growth.',
                    value: 7
                },
            ],
            order: 7
        }),
        new DropdownQuestion({
            key: 'Q8',
            label: '8 The table below shows the highest one-year gain and highest one-year loss on four different hypothetical\
                    investments of $100,000. Given the potential gain or loss in any one year, where would you invest your money?',
            options: [
                {
                    key:  'Investment Portfolio A',
                    value: 1
                },
                {
                    key:  'Investment Portfolio B',
                    value: 3
                },
                {
                    key:  'Investment Portfolio C',
                    value: 5
                },
                {
                    key:  'Investment Portfolio D',
                    value: 7
                },
            ],
            order: 8
        }),
        new DropdownQuestion({
            key: 'Q9',
            label: 'Which one of the following statements describes your feelings towards choosing an investment?',
            options: [
                {
                    key:  'I would prefer investments with little or no fluctuation in value and have a low degree of\
                            risk associated with them. I am willing to accept the lower return associated with these investments',
                    value: 1
                },
                {
                    key:  'I prefer to diversify with a mix of investments that have an emphasis on low risk. I am\
                            happy to have a small proportion of the portfolio invested in assets that have a higher\
                            degree of risk in order to achieve a slightly higher return. I am prepared to accept a\
                            negative investment return of 1 in 10 years.',
                    value: 3
                },
                {
                    key:  'I prefer to have a spread of investments in a balanced portfolio. I am happy to have a\
                             negative return of 1 in 7 years.',
                    value: 5
                },
                {
                    key:  'I prefer to diversify my investments with an emphasis on more investments that have higher\
                            returns, but still having a small amount of low risk investments. I am happy to accept a\
                            negative return of 1 in 5 years',
                    value: 7
                },
                {
                    key:  'I would select investments that have a higher degree of investment price fluctuation so that\
                            I can earn higher long term returns. I am happy to accept a negative return of 1 in 3 years\
                            in order to achieve this goal.',
                    value: 9
                },
            ],
            order: 9
        }),
        new DropdownQuestion({
            key: 'Q10',
            label: 'How secure is your current and future income from sources such as salary, pensions or other investments?',
            options: [
                {
                    key:  'Not secure.',
                    value: 1
                },
                {
                    key:  'Somewhat secure.',
                    value: 3
                },
                {
                    key:  'Fairly secure.',
                    value: 5
                },
                {
                    key:  'Very secure.',
                    value: 7
                },
            ],
            order: 10
        }),
        new DropdownQuestion({
            key: 'Q11',
            label: 'Apart from your home, have you ever borrowed money to make an investment?',
            options: [
                {
                    key:  'Yes',
                    value: 0
                },
                {
                    key:  'No',
                    value: 1
                },
            ],
            order: 11
        }),
        new DropdownQuestion({
            key: 'Q12',
            label: 'Would you consider borrowing money to make an investment?',
            options: [
                {
                    key:  'Yes',
                    value: 0
                },
                {
                    key:  'No',
                    value: 1
                },
            ],
            order: 12
        })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}