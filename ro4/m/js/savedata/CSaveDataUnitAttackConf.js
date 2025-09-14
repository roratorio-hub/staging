/**
 * 「攻撃方法」情報クラス
 */
class CSaveDataUnitAttackConf extends CSaveDataUnitBase {

    /**
     * タイプ値.
     */
    static get type () {
        return 826;
    }

    /**
     * バージョン番号.
     */
    static get version () {
        return 1;
    }

    /**
     * 処理順に並んだプロパティ名（自身のプロパティのみ）.
     */
    static get #propNamesSelf () {
        return [
            CSaveDataConst.propNameOptCode,
            CSaveDataConst.propNameParseCtrlFlag,
            CSaveDataConst.propNameAttackSkillID,
            CSaveDataConst.propNameSourceTypeID,
            CSaveDataConst.propNameAttackSkillLv,
            ...(Array(5).fill(CSaveDataConst.propNameAttackSkillOption)),
        ];
    }

    /**
     * 処理順に並んだプロパティ名（継承プロパティ含む）.
     */
    static get propNames () {
        return super.propNames.concat(this.#propNamesSelf);
    }

    /**
     * コンストラクタ.
     */
    constructor () {
        super();

        // プロパティ定義情報の登録
        this.registerPropInfo(CSaveDataConst.propNameOptCode, 6);
        this.registerPropInfo(CSaveDataConst.propNameParseCtrlFlag, 11);
        this.registerPropInfo(CSaveDataConst.propNameAttackSkillID, 11);
        this.registerPropInfo(CSaveDataConst.propNameSourceTypeID, 6);
        this.registerPropInfo(CSaveDataConst.propNameAttackSkillLv, 4);
        this.registerPropInfo(CSaveDataConst.propNameAttackSkillOption, 18);
    }

    /**
     * データのコンパクション（不要データの削除）を行う.
     * （継承先でオーバーライドして個別の処理を追加する）
     */
    doCompaction () {
        // 共用のフラグ処理を利用
        this.doCompaction_ModifyFlagGT0();
    }

    /**
     * ユニットのデータが空であるかを判定する.
     * （継承先でオーバーライドして個別の処理を追加する）
     * @returns {boolean} true:空である、false:空でない
     */
    isEmptyUnit () {
        return false;
    }
}