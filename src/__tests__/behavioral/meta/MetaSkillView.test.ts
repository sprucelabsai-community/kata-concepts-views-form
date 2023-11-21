import { fake } from '@sprucelabs/spruce-test-fixtures'
import MetaSkillViewController from '../../../meta/Meta.svc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class MetaSkillViewTest extends AbstractEightBitTest {
	private static vc: MetaSkillViewController

	public static async beforeEach() {
		await super.beforeEach()
		this.vc = this.views.Controller('eightbitstories.meta', {})
	}
}
