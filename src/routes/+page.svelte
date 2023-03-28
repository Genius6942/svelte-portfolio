<script lang="ts">
	import { onMount } from 'svelte';
	import { init } from '$lib/blob.js';
	import ListTypewriter from '$lib/ListTypewriter.svelte';
	import Typewriter from 'svelte-typewriter/Typewriter.svelte';

	let canvasRef = null as unknown as HTMLCanvasElement;

	onMount(() => {
		init(canvasRef);
		console.log(canvasRef);
	});

	// const intervals = [100, 100, 100, 100, 100, 100, 300, 100, 100, 100] as unknown as number;
</script>

<div class="h-screen relative">
	<canvas bind:this={canvasRef} />
	<div
		class="h-screen w-screen absolute top-0 left-0 flex items-center justify-center pointer-events-none"
		style="--cursor-width: 4px; --cursor-color: #fff;"
	>
		<div class="text-white text-4xl">
			<Typewriter interval={100}>
				Hi, I'm <span class="text-6xl bungee">Joshua Liu,</span>
			</Typewriter>
			<div class="text-3xl mt-5">
				<!-- <ListTypewriter items={['An Engineer', 'A Web Developer', 'A Student']} /> -->
				<Typewriter interval={60} delay={1500}>A student, web developer, and engineer.</Typewriter>
			</div>
		</div>
	</div>
</div>
<div>
	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore rerum repellat nisi, animi
	sequi ducimus voluptatibus nostrum. Distinctio, laboriosam, alias recusandae perferendis harum,
	animi esse voluptatem quam facere beatae culpa! Architecto inventore non excepturi praesentium in
	nisi quasi doloribus ducimus et! Dolorem recusandae optio porro odio id corporis. Sed neque
	consequatur nisi rerum officia. Autem quis ea dolores odit! Ad. Culpa, molestias labore, autem
	deleniti fugit officiis rem eius aliquam exercitationem nemo esse quibusdam quidem veniam atque,
	nostrum ab suscipit doloremque debitis consequatur. Quod beatae repellat tempore, quasi enim ex!
	Tempora exercitationem voluptate reprehenderit suscipit dignissimos molestiae voluptatum omnis
	quasi neque. Neque error praesentium eaque beatae quisquam nam sit minima exercitationem nesciunt
	a modi obcaecati, sint magnam, corrupti amet expedita! Facere impedit rem quod dicta quia rerum,
	est inventore necessitatibus exercitationem earum repellat, ipsam ad error temporibus quidem
	officiis esse! Reprehenderit, fugiat nemo! Non dolore, pariatur atque distinctio itaque inventore?
	Hic id dignissimos nesciunt nulla voluptatum aut molestiae, sequi, unde repudiandae molestias
	repellat esse accusamus deserunt dolores veritatis perferendis, animi quidem ipsam autem. Quaerat
	perferendis animi velit obcaecati officia suscipit? Ullam consequuntur, vero asperiores eum
	delectus, assumenda officia eius ipsa rem dolorum laudantium laborum vitae dolores, iusto fuga
	inventore temporibus qui. Sequi cum unde rerum aliquam, incidunt porro tenetur eius. Architecto
	qui suscipit reiciendis eius esse ex ipsam, doloremque labore error debitis. Est facere nisi fugit
	aut dolores expedita beatae, odit architecto iste eligendi ducimus saepe sint distinctio. Libero,
	quos! Dolorem voluptas iusto repudiandae natus assumenda inventore reprehenderit earum asperiores
	iure atque aut qui ratione, nemo dolores? Quis est facere neque quaerat non. Molestiae facere eos
	tempora eveniet, accusantium ex! Modi similique sint libero molestiae eligendi laudantium est esse
	quibusdam consectetur et, pariatur quaerat, vel sunt, soluta temporibus labore atque voluptas illo
	consequatur adipisci quae possimus mollitia voluptatibus. Quos, ad? Hic voluptatem ex cumque
	numquam nihil ratione dolorem assumenda dignissimos id molestiae eius esse dolor blanditiis
	corrupti laborum laudantium quia temporibus qui nostrum, tempore veniam, nesciunt asperiores
	aspernatur. Facere, voluptatum. Saepe exercitationem mollitia beatae reprehenderit repudiandae!
	Ipsum saepe, in at quas quos modi soluta, alias recusandae necessitatibus qui blanditiis ab magni
	impedit atque quibusdam corrupti suscipit quidem. Perspiciatis, corporis excepturi. Sit vitae
	adipisci reprehenderit deleniti consequuntur fugit. Illum velit omnis ipsa, ab sint esse in
	reiciendis saepe quod ut est quam quaerat! Adipisci alias dolores molestiae hic harum tenetur
	modi. Facilis nesciunt ab modi porro, accusantium quasi vitae optio. Ab iusto eligendi ipsa quae
	repellendus! Blanditiis, alias cumque, eaque officiis accusamus molestias, laborum et doloribus
	tempora laudantium harum iure at. Excepturi dicta totam id libero porro non ipsa, soluta harum
	accusamus obcaecati ipsam expedita repellendus aspernatur quaerat hic ullam velit placeat ipsum
	quas. Dolores totam a sequi, magnam aperiam labore. At aliquam tempore, aliquid, molestiae
	explicabo quas ducimus debitis perspiciatis nesciunt dolorem, facere architecto voluptatem eveniet
	officiis? Laboriosam quidem sed, id quis nisi at eaque, eligendi deserunt dolore recusandae et!
	Aliquid, magni ab expedita voluptatum ipsum esse mollitia eum harum laboriosam nisi id officia
	possimus ea voluptates fugiat molestiae aspernatur qui corporis labore soluta accusantium nesciunt
	consequuntur ipsa! Magnam, accusamus? Saepe officiis a fugit eum cupiditate et doloremque hic
	natus eos id, repudiandae doloribus quae animi quas voluptatem corrupti necessitatibus? Iste atque
	animi vitae voluptatibus debitis non omnis excepturi alias. Magnam iusto perferendis sapiente
	consequuntur aperiam placeat mollitia unde alias, velit non quibusdam nesciunt asperiores nihil
	quasi ratione officiis neque optio repudiandae est quas molestias blanditiis. Iure vel repellendus
	fugiat. Dolor eligendi consequuntur maiores obcaecati ullam sit, voluptatum quis cupiditate alias
	perspiciatis autem reprehenderit. Tempore aspernatur culpa repellat repudiandae cumque totam esse
	maiores distinctio tenetur. Quo excepturi corrupti non aspernatur. Cumque rerum voluptatem iste
	provident, dolor laboriosam adipisci culpa tenetur nemo saepe minus quia sed illo sequi earum ad
	corporis animi? A id reprehenderit ex, tempore velit eaque harum aliquid! Excepturi sapiente,
	tempora nemo labore, eius soluta provident sit maxime corrupti cum officiis quas asperiores
	dolores, aspernatur perferendis quis! Placeat, ut voluptatibus magnam rem cum odio? Cumque
	repellendus delectus officia! Quos natus minus unde nobis reiciendis consectetur, dolore minima,
	nemo perferendis architecto quas maxime, necessitatibus dolores et delectus obcaecati quisquam?
	Inventore animi aut nam esse accusantium iure aliquam eius unde. Nihil minus debitis neque eum
	culpa consequatur aut fugiat fuga deserunt corporis error qui doloribus iste, enim voluptatem
	voluptatum, quaerat ratione veritatis cum laborum commodi in! Rem, totam hic. Facere. Corrupti
	vero molestiae quibusdam in, minima asperiores quaerat suscipit. Ullam, explicabo. Eaque corrupti
	ipsa suscipit architecto. Eveniet, in illum numquam illo repellat omnis voluptas ea. Dignissimos
	ratione magnam accusantium consequuntur. Magni nemo eligendi totam amet itaque molestias sapiente
	ea voluptatum voluptas! Exercitationem amet rem possimus iusto perferendis velit nisi. Sapiente
	dolores quaerat delectus, minima incidunt accusamus temporibus nulla recusandae possimus? Esse
	praesentium omnis eligendi eum assumenda, nisi facere vero debitis velit a architecto delectus
	totam sequi rem odio illum ea similique fugiat incidunt veritatis aliquid repellendus? Officia,
	autem. Deserunt, adipisci! Excepturi molestiae reiciendis ab autem cupiditate, consectetur optio
	aut facilis exercitationem ex omnis, vitae odit voluptates, error saepe doloremque asperiores
	accusantium officiis sapiente quisquam impedit soluta delectus. Minima, necessitatibus a. Maiores
	error, iusto, obcaecati doloremque, eum laboriosam omnis pariatur quis eligendi consequuntur unde
	quod consequatur autem debitis nostrum ab. Sunt, quo laudantium! Eos, ea animi tempora nostrum
	aperiam dicta cumque. Sed, dolorum vitae. Beatae consequuntur aliquid ducimus a error. Adipisci et
	eveniet incidunt molestias id, debitis unde quidem placeat, sapiente nesciunt dolores!
	Repudiandae, recusandae laudantium alias ipsum veritatis ipsam. Cum. Quia enim culpa nam molestias
	dolorem, animi similique vel aperiam unde eum cum veritatis tempora excepturi quibusdam alias
	ratione est incidunt aliquid deserunt temporibus maxime voluptatum nobis inventore! Enim, saepe.
	Sapiente, beatae officiis placeat harum porro possimus tenetur ex adipisci dolorum, reprehenderit
	nulla laborum quasi iure vitae soluta sit aperiam nam? Perferendis asperiores repellat earum enim,
	quas aliquam? Accusamus, nihil! Dolores, quibusdam? Odit vel non dolorum maxime, error repudiandae
	enim soluta atque eligendi labore tenetur numquam itaque aliquam quae dolorem deserunt. Laudantium
	sapiente magnam, quam iusto blanditiis voluptates at repellendus. Voluptatum error dolore maxime
	facere animi consequuntur facilis necessitatibus expedita quas in mollitia eos nobis at fugit
	blanditiis incidunt autem saepe dignissimos deleniti, neque nisi aliquam laudantium ratione.
	Magnam, totam? Enim doloribus deserunt assumenda placeat adipisci quis voluptatum at, veniam
	tenetur repellat qui quo! Voluptatibus aliquid, molestias dolor inventore commodi recusandae
	perspiciatis, sunt non totam necessitatibus facilis qui harum! At. Ducimus aperiam quam eum magnam
	obcaecati veritatis quis, tenetur perferendis, doloribus quae, recusandae corrupti consectetur
	ipsam. Tempora, recusandae animi eum dolores minima officiis, voluptates iusto qui beatae
	dignissimos explicabo. Dolorem? Neque autem vitae, doloremque dolorum sapiente asperiores omnis
	harum ullam tempora magni quia, veritatis eius, odit assumenda non sed voluptatibus eos. Iusto
	eius magni officia sunt tenetur necessitatibus temporibus tempore? Nihil nisi assumenda itaque,
	consequatur cum autem fugit consequuntur? Dolore nesciunt praesentium eos repudiandae repellendus
	distinctio sit voluptate, dignissimos beatae esse molestiae tenetur placeat, quibusdam aperiam,
	enim officia quam sequi. Perferendis quaerat expedita et tenetur libero, tempore ducimus
	accusantium fugiat quo deserunt! Ut quos est repellendus quaerat sed nesciunt omnis cupiditate
	ratione, ducimus optio fugit, veritatis sit praesentium, quam ipsa? Modi alias necessitatibus
	obcaecati atque nihil unde delectus reprehenderit commodi velit. Est tenetur velit dignissimos
	alias! Sequi, necessitatibus pariatur nisi ad facere nemo praesentium minima eaque eligendi quas
	deserunt. Voluptas! Dolorem aspernatur quod ad delectus vero nulla recusandae labore earum ipsum
	commodi? Cumque rerum dolorem alias saepe odit maxime sunt vero. Dignissimos architecto vero
	deserunt delectus reprehenderit minus velit! Odio? Labore quasi, fugiat eveniet blanditiis quas
	molestiae quisquam quos delectus minus beatae aut amet ab, ullam corporis aspernatur aperiam
	voluptatum corrupti reprehenderit alias numquam ipsa. Et deleniti accusamus suscipit dolore.
	Quisquam aspernatur dignissimos reiciendis itaque. Laborum minima voluptatem vel saepe officiis
	facilis repellendus omnis soluta repudiandae quidem, temporibus aspernatur? Alias obcaecati natus
	debitis distinctio quae nam dignissimos possimus omnis sed. Amet, repellat quia id non numquam
	voluptatum possimus quibusdam iusto hic quod adipisci magni nihil. Iure blanditiis ullam suscipit
	reiciendis voluptas fuga laborum vel aperiam, deserunt corrupti labore eligendi officia! Repellat
	ullam quibusdam soluta ad maiores officiis! Saepe asperiores aperiam numquam veritatis non, et
	recusandae officia ratione, illo sequi deleniti ullam alias enim, libero delectus nam odit
	deserunt ipsam at? Laborum in soluta perspiciatis repellat quasi laudantium beatae facere
	reprehenderit ipsam commodi delectus recusandae blanditiis distinctio accusantium illo nobis iure
	voluptates, molestiae debitis dolores rerum, quas saepe cum! Dolore, porro! Omnis nesciunt
	sapiente veritatis esse consequuntur! Doloremque autem illum ipsum delectus perferendis facere
	labore perspiciatis fuga magnam odio fugit, possimus deserunt accusamus nulla nesciunt, hic, ipsam
	non minima dolor. Atque! Officiis suscipit distinctio rerum. Amet quisquam, cumque animi corporis
	illo maxime sapiente unde! Eum nam id explicabo accusantium sit veniam modi incidunt, officiis non
	praesentium nesciunt? Rerum magnam rem ab. Autem, dolor porro aliquid, iure ipsum aperiam, nisi
	inventore cupiditate consequatur suscipit vitae. Eaque rem error quam consectetur, maiores id
	omnis, labore, quos nesciunt nisi neque deserunt ad quas vero. Sit nihil aut voluptatibus
	repellat? Exercitationem sint, odio dolores nisi saepe alias error earum voluptatem itaque minus
	laboriosam neque a voluptas corporis ex ad sapiente voluptate sed quo, facere velit? Illo
	recusandae facilis ex enim. Maiores, illo! Vero ipsam atque, rerum tempore eius, possimus ipsa
	totam quasi omnis eum est error? Nulla maiores, odio optio labore inventore saepe sunt sapiente!
	Tenetur eius placeat non eum tempore harum libero soluta at, nemo ut fuga odio dicta ab voluptatem
	incidunt quod sunt qui nostrum eveniet, amet voluptates voluptate. Aut maxime ea sunt.
	Reprehenderit labore accusantium iure fugiat alias nobis excepturi animi velit! Facilis dicta
	sequi quas iusto laudantium ipsa ducimus officia impedit ab commodi dolores magnam voluptate ad
	aliquid, soluta quidem accusamus? Commodi earum, veritatis perspiciatis placeat modi fuga
	explicabo minima quis voluptas libero quod deleniti sint omnis reiciendis aut quasi blanditiis ut
	sequi quo culpa dolore recusandae rerum ullam? Quasi, blanditiis. Quos facilis vel sequi ex
	laborum fugit atque quisquam debitis ipsam aperiam, nemo reprehenderit! Autem, possimus fugiat
	cupiditate, ipsam quae exercitationem magni ex magnam nihil esse eligendi odit nam delectus.
	Error, facilis deserunt atque corrupti voluptatibus eligendi corporis, eveniet in voluptatum
	laborum perferendis recusandae repellat, dolorum voluptate. Error porro sequi quis consequatur
	suscipit tempora sed magnam ipsa ullam. In, nostrum. Maxime est, deleniti nam fugit repellendus
	aut, expedita accusamus eveniet sapiente voluptatem enim reiciendis voluptate provident
	temporibus, necessitatibus voluptatum molestiae nemo quidem facere facilis incidunt eos natus.
	Repellat, adipisci autem? Minima vero neque maiores repudiandae eius ipsa aut enim, ex voluptas
	ducimus nisi consequuntur pariatur tempore atque quidem voluptatem quis tempora nulla. Assumenda
	tenetur nam nisi voluptatum quaerat quasi qui. Temporibus praesentium fugit delectus optio
	asperiores nisi velit magnam unde, atque distinctio doloremque officiis. Quis, sint velit
	excepturi inventore sit et. Quia optio voluptates harum sint repudiandae delectus, labore magnam?
	Excepturi neque adipisci est, repudiandae labore quam odit possimus necessitatibus culpa
	repellendus nihil eaque dolores debitis consequatur numquam expedita quas nisi ullam reprehenderit
	maiores quia tenetur praesentium fuga ratione! Ipsum. Eum porro consequuntur, temporibus
	distinctio quo reiciendis ut animi iste cum suscipit voluptatibus corporis, debitis architecto
	eius accusantium tenetur deserunt omnis magni perferendis assumenda inventore doloribus libero!
	Alias, vitae voluptatem! Earum labore veritatis pariatur fugit incidunt, eveniet temporibus
	deleniti! Quod praesentium optio tenetur reiciendis totam iusto? Ipsum dolorum vitae esse quisquam
	harum veritatis officia libero beatae amet! Odit, autem modi! Est totam in voluptatibus magni illo
	dicta amet veritatis mollitia itaque id ex, unde rem atque nesciunt possimus labore. Similique
	voluptates alias quam omnis laudantium, commodi accusamus est consequuntur facilis. Natus repellat
	vel consequuntur nesciunt dolorem, ad aut delectus cumque expedita eos nostrum, illo hic inventore
	aperiam ab earum architecto distinctio voluptatem dolores sint. Necessitatibus odio qui aut quasi
	officiis? Nam porro, voluptates sed necessitatibus repellendus id dolor, velit impedit neque ipsa
	reiciendis. Commodi vel perspiciatis quo, enim debitis accusantium nobis pariatur sequi odio,
	voluptas voluptatum aliquam corrupti nulla molestias. Quibusdam earum deserunt consectetur, illum
	corporis sit, incidunt consequatur error dolor, impedit velit eius quo accusamus repellat et?
	Corporis, et atque fuga neque nisi quaerat asperiores inventore laudantium facere eveniet.
	Obcaecati quod voluptatum ad illum quia explicabo optio accusantium, illo quis maiores blanditiis
	consequatur nemo dolorum esse? In inventore excepturi alias temporibus nam id necessitatibus.
	Iusto ipsum perferendis deleniti cum. Nesciunt in placeat molestiae vero. Ullam, est impedit quod
	sit, illo quae amet ut animi non saepe, dolorum nostrum aut recusandae cum maxime. Quis impedit
	debitis est. Tempora, consectetur accusamus. Accusamus sunt rem libero repudiandae iusto culpa
	ipsa, vitae laudantium incidunt quasi ad at dignissimos tenetur delectus nihil obcaecati officia
	adipisci. Facilis nihil commodi dolor cupiditate possimus harum soluta sit! Amet, quisquam nihil
	est laudantium esse blanditiis placeat quibusdam harum vel voluptatem quidem sed aliquam maiores
	nam perspiciatis fuga totam, suscipit facilis rerum ut. Eius debitis adipisci qui ducimus maxime.
	Nostrum eaque officiis soluta magni maxime recusandae cumque. Officiis ea consectetur assumenda
	quo? Tempore magnam, ab exercitationem quaerat, molestiae minus sed sequi, rerum quibusdam
	repellat in provident debitis? Omnis, maiores! Eaque, non fuga dolorum neque ipsa, alias pariatur
	assumenda explicabo quas nisi sint. Voluptates repudiandae dolore ad repellendus aspernatur vero
	id praesentium placeat. Possimus excepturi doloribus saepe aliquam, dignissimos nesciunt? Sint
	nemo eos ea. Aspernatur eaque laboriosam ullam iusto eveniet! Nam voluptates laborum praesentium
	non distinctio consequatur consequuntur, excepturi similique earum quasi optio tempore, facere
	iste sequi! Doloremque, omnis architecto. Eveniet corrupti illo sint dignissimos quam, eos
	recusandae assumenda quas unde optio maxime odio non velit id officia in repellat vero. Eveniet
	atque facilis nostrum aspernatur blanditiis fugiat a error. Soluta consectetur quos obcaecati a
	neque corrupti ipsa qui, totam dicta, molestias expedita alias in praesentium vero odio, amet
	exercitationem tempore distinctio aut laborum. Alias ducimus velit dolorem unde molestiae?
	Distinctio ad alias deserunt assumenda eaque molestiae error rem ab officiis est dolore excepturi,
	tempora dolor optio enim et pariatur quis voluptates a voluptas id maxime esse saepe iste. Eius.
	Ex nihil soluta consectetur ad eveniet incidunt iure debitis tempora qui suscipit quisquam
	possimus quae ratione recusandae, veniam ducimus beatae eos saepe amet dolor aliquid. Nihil
	architecto error molestias magnam? Deleniti nobis repellendus accusamus mollitia eveniet voluptate
	molestiae. Tempora repellat, autem at recusandae voluptatum quas iusto labore quam ab sapiente
	magni facilis quos mollitia, nesciunt vero, quasi laudantium distinctio ducimus! Velit eveniet
	culpa dolor odio neque deleniti laudantium ex fugiat, nam omnis, atque, et quae itaque libero
	voluptates repellendus sint delectus aut doloremque. Qui perspiciatis repellat eveniet labore
	dignissimos earum. Hic fugit unde culpa, quis veritatis reprehenderit dolores praesentium, illo
	minima suscipit sunt at sequi libero a vel magnam veniam corrupti eligendi nisi quaerat sit
	itaque, neque autem. Repudiandae, a. Architecto ipsa sit dolores nesciunt, deserunt numquam odit
	praesentium consectetur ducimus, est et officiis quis sunt fugiat delectus reprehenderit!
	Obcaecati, corporis. Nulla incidunt hic doloremque, eligendi fuga dolore unde. Eveniet? Obcaecati
	repudiandae eveniet id accusantium, beatae facere minima commodi officia praesentium accusamus
	tenetur non quo nulla cumque quae saepe at, eos reiciendis? Minus consequatur fuga voluptas nam
	eligendi expedita illo. Repudiandae officiis repellat voluptatum nesciunt reiciendis, est laborum
	numquam veritatis assumenda sunt labore incidunt sequi, harum commodi, repellendus sint iusto.
	Quos veniam est obcaecati a quas. Voluptates placeat natus repellendus. Saepe cupiditate
	reiciendis animi veritatis, fuga provident temporibus sint corrupti eum doloremque vel incidunt
	dolorem id placeat a labore? Non ullam corporis voluptate necessitatibus animi reiciendis,
	officiis suscipit! Officia, voluptatem. Asperiores neque dolores, voluptatum iure quis cumque
	illum accusantium provident nostrum. Ratione animi autem deleniti possimus pariatur sit facilis
	perferendis assumenda nobis. Officia, aut aspernatur. Odit eius necessitatibus optio nam. Impedit
	quos nesciunt a, pariatur sapiente ratione, quas, minus numquam reiciendis debitis quisquam?
	Dignissimos molestias nostrum ab voluptate, beatae, maxime, vel at natus inventore molestiae earum
	ipsam? Fuga, totam recusandae. Rerum dolore deleniti deserunt dolores, incidunt blanditiis, ea
	sint autem odio provident explicabo perferendis optio voluptate sequi quos impedit id vel ad, in
	neque. Fugit impedit corporis culpa ullam itaque. Odit exercitationem voluptatum natus obcaecati
	debitis velit ipsum temporibus, eaque quasi mollitia in recusandae sed dolores reprehenderit
	labore aut iste, minima molestiae delectus at ratione quo accusantium magnam. Sint, tempora. Ab
	odio incidunt provident quod voluptate iusto vitae deleniti. Vitae, illum accusantium inventore
	dolore optio non veritatis ipsa numquam porro? At unde magni repellat, ut odit facilis fugiat
	praesentium eligendi? Officiis rerum beatae placeat fugiat unde eum commodi molestias qui corporis
	quo, non labore totam odio voluptatem aliquid rem a nihil soluta. Explicabo nisi nam dolor sequi
	modi, officiis molestias! Amet quas beatae sequi. Vitae inventore ipsum non nisi incidunt cum
	laboriosam ratione! Nam libero voluptas illo dolor, aliquam corporis est blanditiis hic maiores
	perspiciatis delectus voluptates ducimus nemo nisi. Alias fugit saepe, odit dolore recusandae
	placeat obcaecati? Ab odio non aperiam delectus qui. Aut non quia consectetur ea perspiciatis
	dolorum unde iste at debitis fugiat soluta, quas neque velit. Placeat voluptate quos harum
	eligendi necessitatibus fugiat voluptatibus neque mollitia aliquid. Doloremque voluptatibus
	facilis praesentium asperiores doloribus, porro eveniet cupiditate maiores tempora facere ad,
	veritatis, unde itaque temporibus laboriosam nisi. Veritatis ratione perspiciatis ab provident
	quia asperiores dolorum, quasi, eaque a alias eligendi minus, laudantium beatae quos eius? Dolore
	quidem debitis iure, dolor minus commodi fuga ratione delectus totam praesentium? Optio, natus!
	Assumenda nemo vitae pariatur ad rerum aperiam repudiandae eligendi reiciendis inventore quasi sit
	provident error magni animi nam, deserunt aut explicabo. Corporis labore cupiditate esse nisi
	dicta. Id. Ratione tenetur aut quidem ad adipisci suscipit, quis ut ea, optio tempora iusto
	sapiente accusantium sit porro cupiditate, eos soluta aspernatur rerum! Voluptas hic atque tenetur
	similique soluta doloribus delectus! Officia nesciunt possimus eum, delectus cumque pariatur
	mollitia ex earum iste quasi accusamus, aliquam tempore, deleniti eveniet recusandae
	necessitatibus a. Repellendus hic quisquam porro sint deserunt possimus accusantium ratione quia.
	Sit voluptatum minima maxime dolorum quas mollitia quis neque quod perferendis esse inventore ut
	maiores, quo est pariatur vitae nam eveniet dignissimos unde! Esse id doloribus rerum quisquam
	necessitatibus provident! Rerum illum reprehenderit beatae architecto, reiciendis dignissimos
	praesentium nihil molestiae harum quisquam fugit consequuntur commodi, facilis possimus delectus
	laborum saepe? Quidem nulla saepe voluptates magnam quos accusamus eos maiores cupiditate. Eaque
	esse dolore voluptatum, inventore ex culpa. Optio aliquam autem ipsa nostrum deserunt non ex
	maxime blanditiis nam consectetur totam vitae odit dolores modi, corrupti atque ea nesciunt quam
	eligendi.
</div>
