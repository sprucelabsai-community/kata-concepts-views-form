import {
	AbstractSkillViewController,
	CardViewController,
	SkillView,
	SpruceSchemas,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'

export default class MetaSkillViewController extends AbstractSkillViewController {
	public static id = 'meta'
	protected cardVc: CardViewController

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.cardVc = this.CardVc()
	}

	private CardVc(): CardViewController {
		return this.Controller('card', {
			header: {
				title: `Your Family`,
				image: 'https://s3.amazonaws.com/storybook.sprucelabs.ai/values.jpeg',
			},
			body: {
				isBusy: true,
				sections: [{}],
			},
		})
	}

	public render(): SkillView {
		return {
			layouts: [
				{
					cards: [this.cardVc.render()],
				},
			],
		}
	}
}

export type MetaSchema = SpruceSchemas.Eightbitstories.v2023_09_05.MetaSchema
